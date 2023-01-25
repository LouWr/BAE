import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import {
	Card,
	CardBody,
	Checkbox,
	Box,
	Center,
	Spacer,
} from "@chakra-ui/react";

function App() {
	return (
		<div className="App">
			<main>
				<NavBar />
				<Spacer height={"80px"} />
				<h1 className="greeting"> Good Afternoon Derek </h1>
				<Spacer height={"40px"} />

				<label for="file">Progress:</label>
				<progress id="file" value="32" max="100">
					{" "}
					32%{" "}
				</progress>
				<Spacer height={"40px"} />
				<Center>
					<Box maxW="1080px" mx="10">
						<Card>
							<CardBody display="flex" bgColor={"#49BEAA"}>
								<p>Cycled into work</p>
								<Checkbox ml="5" mx="10" colorScheme="red"></Checkbox>
							</CardBody>
						</Card>
						<Spacer height={"20px"} />
						<Card>
							<CardBody display="flex" bgColor={"#49BEAA"}>
								<p>Used public transport to get to work</p>
								<Checkbox ml="5"></Checkbox>
							</CardBody>
						</Card>
						<Spacer height={"20px"} />
						<Card>
							<CardBody display="flex" bgColor={"#49BEAA"}>
								<p>Car-shared with colleagues to get to work</p>
								<Checkbox ml="5"></Checkbox>
							</CardBody>
						</Card>
						<Spacer height={"20px"} />
						<Card>
							<CardBody display="flex" bgColor={"#49BEAA"}>
								<p>
									Turned off computer and monitor when on breaks, lunch and in
									meetings
								</p>
								<Checkbox ml="5"></Checkbox>
							</CardBody>
						</Card>
						<Spacer height={"20px"} />
						<Card>
							<CardBody display="flex" bgColor={"#49BEAA"}>
								<p>
									Always printing double sided to help save trees and reduce
									waste.
								</p>
								<Checkbox ml="5"></Checkbox>
							</CardBody>
						</Card>
						<Spacer height={"20px"} />
						<Card>
							<CardBody display="flex" bgColor={"#49BEAA"}>
								<p>Always recycled when possible!</p>
								<Checkbox ml="5"></Checkbox>
							</CardBody>
						</Card>
						<Spacer height={"20px"} />
						<Card>
							<CardBody display="flex" bgColor={"#49BEAA"}>
								<p>Using a reusable coffee mug instead of a single use cup</p>
								<Checkbox ml="5"></Checkbox>
							</CardBody>
						</Card>
						<Spacer height={"20px"} />
						<Card>
							<CardBody display="flex" bgColor={"#49BEAA"}>
								<p>Always recycled when possible!</p>
								<Checkbox ml="5"></Checkbox>
							</CardBody>
						</Card>
						<Spacer height={"20px"} />
						<Card>
							<CardBody display="flex" bgColor={"#49BEAA"}>
								<p>
									Used digital tools for communication and document sharing
									instead of physical copies.
								</p>
								<Checkbox ml="5"></Checkbox>
							</CardBody>
						</Card>
						<Spacer height={"20px"} />
					</Box>
				</Center>
			</main>
		</div>
	);
}

export default App;
