// discord_app/utils/RegexUtils.tsx
import size from "../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("utils/RegexUtils.tsx");

export default {
  escape(str) {
    return str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
  },
};
