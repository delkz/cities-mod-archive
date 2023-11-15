'use client'

import Link from 'next/link'
import React from 'react'

const Footer = () => {
	return (
		<div className="bg-white shadow py-2 text-center">
			<div className="container mx-auto">
				<div className='flex gap-2 justify-center'>
				<Link href={"/"}>Home</Link>
				|
				<Link href={"/terms-of-use"}>Terms of use</Link>
				</div>
				<div>
				Made with ❤️ by <Link target='_blank' href={"https://linktr.ee/Delkbrz"}>DelkBRZ</Link>
				</div>
				
			</div>

		</div>
	)
}

export default Footer