// discord_app/modules/qualtrics/QualtricsConstants.tsx
import obj132 from "../../../_runtime/00002_obj132.js";

const result = obj132.fileFinishedImporting("modules/qualtrics/QualtricsConstants.tsx");

export const QuestionTypeEnum = { MULTIPLE_CHOICE: "MC", TEXT_ENTRY: "TE", DESCRIPTIVE_BLOCK: "DB" };
export const QuestionSelectorEnum = { SINGLE_ANSWER: "SAVR", MULTIPLE_ANSWER: "MAVR", DROPDOWN: "DL", SINGLE_LINE: "SL", MULTI_LINE: "ML", ESSAY: "ESTB", FORM: "FORM", PASSWORD: "PW", LIKERT: "Likert", BIPOLAR: "Bipolar", PROFILE: "Profile", MAXDIFF: "MaxDiff", DRAG_AND_DROP: "DND", RANK: "Rank", TEXT_BLOCK: "TB" };
export const QuestionSubSelectorEnum = { TEXT: "TX", SHORT_TEXT: "ShortText", LONG_TEXT: "LongText", NUMBER: "Number", DATE: "Date", EMAIL: "Email", SINGLE_ANSWER: "SingleAnswer", MULTIPLE_ANSWER: "MultipleAnswer" };
export const SurveyFlowElementType = { BLOCK: "Block", STANDARD: "Standard", EMBEDDED_DATA: "EmbeddedData", BRANCH: "Branch", GROUP: "Group", END_OF_SURVEY: "EndSurvey", RANDOMIZER: "Randomizer" };