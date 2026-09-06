// discord_app/modules/rtc/SecureFramesPlatformUtils.native.tsx
import util from "../../intl/index.native.tsx";
import native from "../../design/void/native.tsx";
import asyncRequireImpl from "../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../action_sheet/native/ActionSheetActionCreators.tsx";
import ModalActionCreatorsDefault from "../../actions/ModalActionCreators.tsx";
import actions_AlertActionCreatorsDefault from "../../actions/native/AlertActionCreators.tsx";
import safeTransitionToDefault from "../links/safeTransitionTo.native.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import RTCConnectionStore from "../../stores/RTCConnectionStore.tsx";

require = fn;
const SecureFramesConstants = fn(9152);
({
  SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY: hasOwnProperty,
  SECURE_FRAMES_STREAM_VERIFICATION_BOTTOM_SHEET_KEY: metroRequire,
  SECURE_FRAMES_USER_VERIFICATION_MODAL_KEY: closure_7,
} = SecureFramesConstants);
const Constants = fn(1074);
({ ME: closure_8, Routes: closure_9 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/rtc/SecureFramesPlatformUtils.native.tsx");

export default {
  openSecureFramesStreamVerification(streamKey, channelId) {
    const obj = { streamKey, channelId };
    obj.openLazy(asyncRequireImpl(9166, dependencyMap.paths), timestampProducer, obj);
  },
  openSecureFramesUserVerificationModal(id, id2, fn) {
    if (fn()) {
      const obj = { userId: id, channelId: id2 };
      obj.pushLazy(asyncRequireImpl(9155, dependencyMap.paths), obj, React5);
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
    const obj = { title, body: subtitle, confirmText, cancelText: null, confirmColor: null };
    const intl2 = util.intl;
    obj.cancelText = intl2.string(util.t["ETE/oC"]);
    obj.confirmColor = native.ButtonColors.RED;
    obj.confirm(obj).then((result) => {
      if (result) {
        onConfirm();
      }
    });
    const confirmResult = obj.confirm(obj);
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
        let obj = { userId, channelId, guildId, fingerprint };
        ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(9169, dependencyMap.paths), hasOwnProperty, obj);
      }
    }
    obj = { title: null, body: null };
    const intl = util.intl;
    obj.title = intl.string(util.t["5ICxE6"]);
    const intl2 = util.intl;
    obj.body = intl2.string(util.t["v1eXp/"]);
    actions_AlertActionCreatorsDefault.show(obj);
  },
};
