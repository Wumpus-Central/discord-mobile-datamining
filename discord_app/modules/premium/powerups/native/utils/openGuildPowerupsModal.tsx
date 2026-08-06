// discord_app/modules/premium/powerups/native/utils/openGuildPowerupsModal.tsx
import { asyncRequireImpl } from "../../../../../../_runtime/01988_asyncRequireImpl.js";
import { ModalActionCreators } from "../../../../../actions/ModalActionCreators.tsx";
let c3 = 0;
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsModal.tsx");

export default function openGuildPowerupsModal(navigationParams) {
  const merged = Object.assign(navigationParams, Object.create(null));
  let tmp2 = merged;
  if (null != merged.autoOpenPerkId) {
    const obj = {};
    const merged1 = Object.assign(merged);
    const sum = c3 + 1;
    c3 = sum;
    obj.autoOpenRequestId = sum;
    tmp2 = obj;
  }
  ModalActionCreators.pushLazy(asyncRequireImpl(11759, dependencyMap.paths), tmp2, "guild_powerups_modal_key", navigationParams.navigationParams);
};