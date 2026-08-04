// discord_app/modules/guild_rooms/GuildRoomsExperiment.tsx
import createExperiment from "createExperiment";

const items = [{ id: 1, label: "Enable Guild Rooms in this guild", config: { enabled: true, interactionsEnabled: true, multipleRoomsEnabled: false, posturesEnabled: true } }, { id: 2, label: "Enable Guild Rooms without Interactions", config: { enabled: true, interactionsEnabled: false, multipleRoomsEnabled: false, posturesEnabled: true } }, { id: 3, label: "Enable Guild Rooms with Room Variants", config: { enabled: true, interactionsEnabled: true, multipleRoomsEnabled: true, posturesEnabled: true } }, { id: 4, label: "Enable Guild Rooms without Postures", config: { enabled: true, interactionsEnabled: true, multipleRoomsEnabled: false, posturesEnabled: false } }];
const experiment = createExperiment.createExperiment({ kind: "guild", id: "2026-06_guild_rooms", label: "Guild Rooms", defaultConfig: { enabled: false, interactionsEnabled: false, multipleRoomsEnabled: false, posturesEnabled: false }, treatments: items });
const result = require("set").fileFinishedImporting("modules/guild_rooms/GuildRoomsExperiment.tsx");

export default experiment;