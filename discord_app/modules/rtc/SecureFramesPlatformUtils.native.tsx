// === Module 9297: SecureFramesPlatformUtils ===

// Module 9297 (SecureFramesPlatformUtils)
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4605 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4841 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4983 */;
import safeTransitionToDefault from "safeTransitionTo" /* 7357 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4661 */;

require = fn;
const SecureFramesConstants = fn(9295);
({ SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY: hasOwnProperty, SECURE_FRAMES_STREAM_VERIFICATION_BOTTOM_SHEET_KEY: metroRequire, SECURE_FRAMES_USER_VERIFICATION_MODAL_KEY: closure_7 } = SecureFramesConstants);
const Constants = fn(1074);
({ ME: closure_8, Routes: closure_9 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/rtc/SecureFramesPlatformUtils.native.tsx");

export default {
  openSecureFramesStreamVerification(streamKey, channelId) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(9309, dependencyMap.paths), timestampProducer, { streamKey, channelId });
  },
  openSecureFramesUserVerificationModal(id, id2, fn) {
    if (fn()) {
      const obj2 = { userId: id, channelId: id2 };
      ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(9298, dependencyMap.paths), obj2, React5);
    }
  },
  openSecureFramesUpdateConfirmation(confirmText) {
    confirmText = confirmText.confirmText;
    ({ title, subtitle } = confirmText);
    if (confirmText === undefined) {
      const intl = util.intl;
      confirmText = intl.string(util.t["cY+Oob"]);
    }
    const onConfirm = confirmText.onConfirm;
    const obj2 = { title, body: subtitle, confirmText, cancelText: null, confirmColor: null };
    const intl2 = util.intl;
    obj2.cancelText = intl2.string(util.t["ETE/oC"]);
    obj2.confirmColor = native.ButtonColors.RED;
    actions_AlertActionCreatorsDefault.confirm(obj2).then((result) => {
      if (result) {
        onConfirm();
      }
    });
    const confirmResult = actions_AlertActionCreatorsDefault.confirm(obj2);
  },
  handleSecureFramesUserVerificationLink(arg0) {
    ({ userId, fingerprint } = arg0);
    const channelId = RTCConnectionStore.getChannelId();
    const channel = ChannelStore.getChannel(channelId);
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    if (guildId == null) {
      guildId = React6;
    }
    if (null != channelId) {
      if (null != channel) {
        safeTransitionToDefault(React7.CHANNEL(guildId, channelId));
        const obj = { userId, channelId, guildId, fingerprint };
        ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(9312, dependencyMap.paths), hasOwnProperty, obj);
      }
    }
    const obj3 = { title: null, body: null };
    const intl = util.intl;
    obj3.title = intl.string(util.t["5ICxE6"]);
    const intl2 = util.intl;
    obj3.body = intl2.string(util.t["v1eXp/"]);
    actions_AlertActionCreatorsDefault.show(obj3);
  }
};