// === Module 13989: transformApplication ===

// Module 13989 (transformApplication)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/rpc/helpers/transformApplication.tsx");

export default function transformApplication(name) {
  return { name: name.name, id: name.id, icon: name.icon, cover_image: name.coverImage, type: name.type };
};