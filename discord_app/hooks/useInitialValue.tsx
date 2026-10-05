// discord_app/hooks/useInitialValue.tsx
import react from "../../_runtime/00019_react.js";
import ReactCompilerGating_mod from "../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../_runtime/metro/00002__.js";

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("hooks/useInitialValue.tsx");

export default (flag) => react.useState(flag)[0];
