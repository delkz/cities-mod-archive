'use client'

import Link from 'next/link'
import { redirect, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

export default function Example() {
	const { register, handleSubmit } = useForm();
	const router = useRouter()
	const onSubmit = (data: any) => {
		const slug = data.searchBar.replace(" ","-").trim().toLowerCase();

		router.push(`/search/${slug}`)
	};


	return (
		<header className="bg-white shadow">
			<nav className="mx-auto flex max-w-7xl items-center p-6 lg:px-8 gap-3" aria-label="Global">
				<div className="flex">
					<Link href="/" className="-m-1.5 p-1.5">
						<span className="sr-only">Your Company</span>
						<img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
					</Link>
				</div>
				<div className="flex">
					<form onSubmit={handleSubmit(onSubmit)}>
						<input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder='Search' defaultValue="" {...register("searchBar")} />
					</form>
				</div>
			</nav>
		</header>
	)
}
