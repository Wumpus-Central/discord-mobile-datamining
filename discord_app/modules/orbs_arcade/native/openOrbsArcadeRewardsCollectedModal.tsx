// === Module 16976: openOrbsArcadeRewardsCollectedModal ===

// Module 16976 (openOrbsArcadeRewardsCollectedModal)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = globalThis.__r;

const require = fn;
const OrbsArcadeRewardsCollectedModal = "OrbsArcadeRewardsCollectedModal";
const size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/openOrbsArcadeRewardsCollectedModal.tsx");

export function openOrbsArcadeRewardsCollectedModal(rewards, entitlements) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncGeneratorStep(async () => {
    await require("asyncRequireImpl")(paths[3], paths.paths);
    return value.default;
  }), { rewards, entitlements }, OrbsArcadeRewardsCollectedModal);
}
export function closeOrbsArcadeRewardsCollectedModal() {
  ModalActionCreatorsDefault.popWithKey(OrbsArcadeRewardsCollectedModal);
}