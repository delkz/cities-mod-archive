import React from 'react'

const TermsOfUse = () => {

	const terms = [
		{
			"title": "No Affiliation",
			"content": "CitiesModArchive is an independent platform and is not affiliated with the creators of the content featured on this website. We are a platform that provides a space for the distribution of mods created by third-party developers."
		},
		{
			"title": "No Responsibility for Damages",
			"content": "CitiesModArchive does not take responsibility for any mods that may cause damage to your devices. Users are advised to use caution and ensure the compatibility and safety of mods before installation."
		},
		{
			"title": "Free Mods Only",
			"content": "All mods featured on CitiesModArchive must be free of charge or have a free version available. We do not support or endorse any form of paid mods or content that requires payment for access or use."
		},
		{
			"title": "No Monetization",
			"content": "CitiesModArchive does not generate revenue through downloads or any form of monetization related to the mods available on the platform. We are committed to providing a free and open space for the modding community."
		},
		{
			"title": "Mod Ownership and Legal Use",
			"content": "All mods featured on CitiesModArchive are the intellectual property of their respective creators. Users are expected to respect the rights of mod creators and adhere to the terms and conditions set by the creators for the use of their mods. Mods should be used in accordance with applicable laws and regulations."
		},
		{
			"title": "No Affiliation with Paradox or Cities Skylines",
			"content": "CitiesModArchive is an independent platform and is not affiliated with Paradox Interactive or the creators of Cities Skylines. We operate separately from the official development and distribution channels of Cities Skylines and provide a platform for the community to share and explore third-party mods."
		},
		{
			"title": "Disclaimer of Legal Liability",
			"content": "CitiesModArchive is provided on an 'as is' and 'as available' basis. While we strive to maintain the accuracy and safety of the content on our platform, we disclaim any legal liability for the use, interpretation, or consequences of the information and mods available on CitiesModArchive. Users acknowledge that they use the platform at their own risk and are solely responsible for any legal implications that may arise from their use of the provided content."
		},
		{
			"title": "Data Privacy and Mod Ownership",
			"content": "CitiesModArchive prioritizes user privacy, and we do not store any personal data of our users. In adherence to data protection principles, we do not retain information that could identify individuals. Additionally, mod creators, as the rightful owners of their creations, reserve the right to request the removal or exclusion of their mods from CitiesModArchive at any time. We respect the intellectual property rights of mod creators and will promptly address such requests to ensure a transparent and collaborative modding community."
		},
		{
			"title": "Mod Submission and GitHub Repository",
			"content": "To maintain a standardized and secure modding environment, we encourage mod creators to submit their mods using GitHub repositories. The download process will be facilitated through the official 'Releases' page on GitHub. This ensures a reliable and version-controlled distribution process, providing users with direct access to the most up-to-date and authorized versions of mods. CitiesModArchive will link to the respective GitHub repositories for users to seamlessly access and download mods."
		},
		{
			"title": "Link Aggregator Disclaimer",
			"content": "CitiesModArchive operates solely as a link aggregator for mods and does not host or claim ownership over any mods featured on the platform. We serve as a centralized hub to facilitate easy access to external sources, primarily GitHub repositories, where mods are hosted. All rights, ownership, and responsibilities for the mods belong to their respective creators. CitiesModArchive disclaims any association or ownership of the mods and encourages users to refer to the original mod creators' terms and conditions for proper usage."
		}
	]

	return (
		<div>
			<h1>Terms of Use</h1>

			<p className='my-3'>
				Welcome to CitiesModArchive!

				These Terms of Use outline the rules and regulations for the use of our website. By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use CitiesModArchive if you do not accept all of the terms and conditions stated on this page.
			</p>
			<hr className='my-3' />

			{terms && terms.map((term, index) => {
				return <p key={index} className='my-3'>
					<strong>
						{index + 1}. {term.title}
					</strong>
					<br />
					{term.content}
				</p>
			})}

			<p className='my-3'>
				By using CitiesModArchive, you agree to abide by these terms and conditions. Failure to comply with these terms may result in the termination of your access to the website.
			</p>

			<p className='my-3'>
				If you have any questions or concerns about these terms, please contact us at [seu endereço de e-mail].
			</p>

			<p className='my-3'>
				Thank you for using CitiesModArchive responsibly and enjoy your modding experience!
			</p>


		</div>
	);
}

export default TermsOfUse