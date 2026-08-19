// === Module 13888: transformApplication ===

// Module 13888 (transformApplication)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("modules/rpc/helpers/transformApplication.tsx");

export default function transformApplication(name) {
  return { name: name.name, id: name.id, icon: name.icon, cover_image: name.coverImage, type: name.type };
};