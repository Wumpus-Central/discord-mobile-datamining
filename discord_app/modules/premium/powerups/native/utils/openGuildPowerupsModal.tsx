// discord_app/modules/premium/powerups/native/utils/openGuildPowerupsModal.tsx
import asyncRequire from "../../../../../../_runtime/01987_asyncRequire.js";
import ModalActionCreatorsDefault from "../../../../../actions/ModalActionCreators.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let c3 = 0;
const result = size.fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsModal.tsx");

export default function openGuildPowerupsModal(navigationParams) {
  let sum;
  navigationParams = navigationParams.navigationParams;
  const merged = Object.assign(navigationParams, Object.assign({ navigationParams: 0 }));
  let tmp2 = merged;
  if (null != merged.autoOpenPerkId) {
    const obj = { autoOpenRequestId: sum };
    const merged1 = Object.assign(merged);
    sum = c3 + 1;
    c3 = sum;
    tmp2 = obj;
  }
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(12154, dependencyMap.paths), tmp2, "guild_powerups_modal_key", navigationParams);
}
