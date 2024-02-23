import { SiGithub, SiLinkedin } from "react-icons/si"

export default function App() {
	return (
		<header className="w-full border-b bg-white">
			<div className="flex h-16 items-center px-10 sm:px-16 lg:px-44">
				<div className="mx-auto w-full max-w-3xl space-y-20">
					<div className="flex justify-between">
						<div className="flex flex-1 items-center justify-start">
							<a
								href="/"
								className="inline-flex h-10 items-center justify-center text-lg font-bold text-gray-800"
							>
								Haber
							</a>
							<div className="flex flex-1 items-center justify-end">
								<nav className="flex items-center space-x-1">
									<a
										href="https://github.com/marcoshaber99"
										className="h-10 w-10 p-2 text-gray-800 hover:text-[#4078c0]"
									>
										<SiGithub className="h-full w-full" />
									</a>

									<a
										href="https://www.linkedin.com/"
										className="h-10 w-10 p-2 text-gray-800 hover:text-[#0e76a8] "
									>
										<SiLinkedin className="h-full w-full" />
									</a>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
