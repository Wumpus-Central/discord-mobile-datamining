// discord_app/modules/premium/powerups/native/utils/openGuildPowerupsModal.tsx
import set from "../../../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../../../_runtime/02009_asyncRequireImpl.js";
import _modDef4611 from "../../../../../actions/ModalActionCreators.tsx";

let c3 = 0;
const result = set.fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsModal.tsx");

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
  _modDef4611.pushLazy(asyncRequireImpl(12040, dependencyMap.paths), tmp2, "guild_powerups_modal_key", navigationParams.navigationParams);
};