# QuickStart Skill Template v1.0

This repository is intended to quickly demonstrate how to connect a custom skill to a digital person in DDNA Studio and test in a local environment. 

## Running the skill server

1. Run `npm install` in root of project
2. Run `npm run dev` in terminal to start project at port 4000
3. For development, create tunnel using [localtunnel](https://theboroer.github.io/localtunnel-www/) or [ngrok](https://ngrok.com/) to expose localhost to DDNA Studio
4. Add tunnel address to the `skill-def.json` `endpointExecute` property
5. Copy/paste `skill-def.json` into "Create Skill" section of DDNAS and connect newly created skill to your project

When connected, this skill will return user utterances in the format "User said: <User Utterance>". By inspecting the `index.js` code base, you can gain an understanding of how to access the user text from the request as format the return to the digital person.
