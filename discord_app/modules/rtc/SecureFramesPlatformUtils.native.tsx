// discord_app/modules/rtc/SecureFramesPlatformUtils.native.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import createRTCConnection from "createRTCConnection";
import SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY from "SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY";
import ME from "ME";

let c5;
let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY: c5, SECURE_FRAMES_STREAM_VERIFICATION_BOTTOM_SHEET_KEY: closure_6, SECURE_FRAMES_USER_VERIFICATION_MODAL_KEY: error } = SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY);
({ ME: metroImportAll, Routes: c9 } = ME);
const result = require("SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY").fileFinishedImporting("modules/rtc/SecureFramesPlatformUtils.native.tsx");

export default {
  openSecureFramesStreamVerification(streamKey, channelId) {
    let obj = require("../action_sheet/native/ActionSheetActionCreators.tsx");
    obj = { streamKey, channelId };
    obj.openLazy(require("../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(9146, dependencyMap.paths), closure_6, obj);
  },
  openSecureFramesUserVerificationModal(id, id2, arg2) {
    if (arg2()) {
      let obj = require("../../actions/ModalActionCreators.tsx");
      obj = { userId: null, channelId: null };
      obj[0] = id;
      obj[1] = id2;
      obj.pushLazy(require("../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(9136, dependencyMap.paths), obj, closure_7);
    }
  },
  openSecureFramesUpdateConfirmation(confirmText) {
    let subtitle;
    let title;
    confirmText = confirmText.confirmText;
    ({ title, subtitle } = confirmText);
    if (confirmText === undefined) {
      const intl = onConfirm(1236).intl;
      confirmText = intl.string(onConfirm(1236).t["cY+Oob"]);
    }
    onConfirm = confirmText.onConfirm;
    let obj = require("../../actions/native/AlertActionCreators.tsx");
    obj = { title, body: subtitle, confirmText, cancelText: null, confirmColor: null };
    const intl2 = onConfirm(1236).intl;
    obj[3] = intl2.string(onConfirm(1236).t["ETE/oC"]);
    obj[4] = onConfirm(1297).ButtonColors.RED;
    obj.confirm(obj).then((arg0) => {
      if (arg0) {
        onConfirm();
      }
    });
  },
  handleSecureFramesUserVerificationLink(arg0) {
    let fingerprint;
    let userId;
    ({ userId, fingerprint } = arg0);
    channelId = channelId.getChannelId();
    channel = channel.getChannel(channelId);
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    if (guildId == null) {
      guildId = closure_8;
    }
    if (null != channelId) {
      if (null != channel) {
        require("../links/safeTransitionTo.native.tsx")(closure_9.CHANNEL(guildId, channelId));
        const tmp6 = require("../links/safeTransitionTo.native.tsx");
        let obj = { userId: null, channelId: null, guildId: null, fingerprint: null };
        obj[0] = userId;
        obj[1] = channelId;
        obj[2] = guildId;
        obj[3] = fingerprint;
        require("../action_sheet/native/ActionSheetActionCreators.tsx").openLazy(require("../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(9149, dependencyMap.paths), closure_5, obj);
        const obj4 = require("../action_sheet/native/ActionSheetActionCreators.tsx");
      }
    }
    obj = { title: null, body: null };
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[0] = intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t["5ICxE6"]);
    const intl2 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[1] = intl2.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t["v1eXp/"]);
    require("../../actions/native/AlertActionCreators.tsx").show(obj);
  }
};