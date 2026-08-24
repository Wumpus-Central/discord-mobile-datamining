// discord_app/modules/rpc/helpers/transformApplication.tsx
import set from "../../../../_runtime/00002_set.js";

const result = set.fileFinishedImporting("modules/rpc/helpers/transformApplication.tsx");

export default function transformApplication(name) {
  return { name: name.name, id: name.id, icon: name.icon, cover_image: name.coverImage, type: name.type };
};