import ModItem from "@/components/modItem";
import supabase from "@/services/supabase"
import { ModInterface } from "@/services/types";
import Link from "next/link";

export const revalidate = 30

export default async function Home() {
	const { data, error } = await supabase.from('mods').select().range(0, 5);

	return (
		<main>
			<h2>Latest uploaded mods</h2>
			<div className="flex gap-3 flex-col">
				{data && data.map((item: ModInterface) => {
					return <ModItem key={item.id} data={item} />
				})}
				{data && data.map((item: ModInterface) => {
					return <ModItem key={item.id} data={item} />
				})}
			</div>

		</main>
	)
}
