// === Module 16415: openOrbsArcadeRewardsCollectedModal ===

// Module 16415 (openOrbsArcadeRewardsCollectedModal)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6672 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = globalThis.__r;

const require = fn;
const OrbsArcadeRewardsCollectedModal = "OrbsArcadeRewardsCollectedModal";
const size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/openOrbsArcadeRewardsCollectedModal.tsx");

export const openOrbsArcadeRewardsCollectedModal = function openOrbsArcadeRewardsCollectedModal(rewards, entitlements) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncGeneratorStep(async () => {
    await require("asyncRequireImpl")(paths[3], paths.paths);
    return value.default;
  }), { rewards, entitlements }, OrbsArcadeRewardsCollectedModal);
};
export const closeOrbsArcadeRewardsCollectedModal = function closeOrbsArcadeRewardsCollectedModal() {
  ModalActionCreatorsDefault.popWithKey(OrbsArcadeRewardsCollectedModal);
};