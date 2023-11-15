import supabase from '@/services/supabase';
import React from 'react'
interface SearchProps {
	params: {
		search: string;
	}

}
const search = async ({params}:SearchProps) => {
	const { data, error } = await supabase.from('mods').select().ilike('mod_name', `%${String(params.search).replaceAll("-"," ")}%`);
	return (
		<div>{JSON.stringify(data)}</div>
	)
}

export default search