import { ModInterface } from '@/services/types'
import moment from 'moment';
import Link from 'next/link'
import React from 'react'

interface ModItemInterface {
	data: ModInterface;
}

const ModItem = ({ data }: ModItemInterface) => {
	return (
		<div className='rounded shadow p-3'>
			<Link href={"/mod/" + data.id}>
				<div className='text-lg font-bold'>{data.mod_name}</div>
			</Link>
			<div className='text-sm'>created by: {data.mod_author}</div>
			<div className='text-sm'>{moment(data.created_at, "YYYYMMDD").fromNow()}</div>
		</div>
	)
}

export default ModItem