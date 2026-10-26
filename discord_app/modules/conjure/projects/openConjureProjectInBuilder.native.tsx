// discord_app/modules/conjure/projects/openConjureProjectInBuilder.native.tsx
import openConjureHomeScreenDefault from "../home/native/openConjureHomeScreen.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/conjure/projects/openConjureProjectInBuilder.native.tsx");

export default function openConjureProjectInBuilder(id) {
  openConjureHomeScreenDefault(id.id);
  return true;
}
