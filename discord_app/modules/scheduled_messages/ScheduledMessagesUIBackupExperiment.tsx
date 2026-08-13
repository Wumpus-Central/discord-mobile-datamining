// discord_app/modules/scheduled_messages/ScheduledMessagesUIBackupExperiment.tsx
import ApexExperiment from "ApexExperiment";

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-scheduled-messages-ui-backup", kind: "user", defaultConfig: false, variations: { 0: false, 1: true } });
const result = require("set").fileFinishedImporting("modules/scheduled_messages/ScheduledMessagesUIBackupExperiment.tsx");

export default apexExperiment;