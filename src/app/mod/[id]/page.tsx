import supabase from '@/services/supabase';
import { ModInterface } from '@/services/types';
import React from 'react'
import moment from 'moment';
import Image from 'next/image';
export const revalidate = 30;

interface ModPageProps {
	params: {
		id: string;
	}

}

const ModPage = async ({ params }: ModPageProps) => {


	const { data, error } = await supabase.from('mods').select().eq('id', String(params.id));

	if (data && data[0]) {
		const modData: ModInterface = data[0];

		return (
			<div>
				<h1 className='text-lg font-bold'>{modData.mod_name}</h1>
				<div className='flex gap-2 text-sm'>
					<div >{moment(modData.created_at, "YYYYMMDD").fromNow()}</div>
					<span>by: {modData.mod_author}</span>
					<span>{modData.mod_likes}</span>
				</div>

				<hr />
				
				{modData.mod_imageLink && <Image alt={modData.mod_name} src={modData.mod_imageLink}/>}

				<span>{modData.mod_description}</span>
				<span>{modData.mod_imageLink}</span>
				
				<span>{modData.mod_tag}</span>
			</div>
		)
	}

}

export default ModPage