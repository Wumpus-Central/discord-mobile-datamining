// discord_app/modules/premium/powerups/native/utils/openGuildPowerupsModal.tsx
import asyncRequireImpl from "../../../../../../_runtime/01896_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../../../actions/ModalActionCreators.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let c3 = 0;
const result = size.fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsModal.tsx");

export default function openGuildPowerupsModal(navigationParams) {
  const merged = Object.assign(navigationParams, Object.assign({ navigationParams: 0 }));
  let tmp2 = merged;
  if (null != merged.autoOpenPerkId) {
    const obj = {};
    const merged1 = Object.assign(merged);
    const sum = c3 + 1;
    c3 = sum;
    obj.autoOpenRequestId = sum;
    tmp2 = obj;
  }
  ModalActionCreatorsDefault.pushLazy(
    asyncRequireImpl(12480, dependencyMap.paths),
    tmp2,
    "guild_powerups_modal_key",
    navigationParams.navigationParams,
  );
}
