// === Module 9782: ? ===

// Module 9782
import getSystemLocale from "getSystemLocale" /* 1236 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2010 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4413 */;
import _modDef4689 from "module_4689" /* 4689 */;
import _modDef4823 from "module_4823" /* 4823 */;
import _safeTransitionToDefault from "_safeTransitionTo" /* 6056 */;
import closure_3 from "ensureGuildLoaded" /* 1391 */;
import closure_4 from "createRTCConnection" /* 4520 */;
import SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY from "SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY" /* 9780 */;
import ME from "ME" /* 676 */;

require = arg1;
({ SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY: c5, SECURE_FRAMES_STREAM_VERIFICATION_BOTTOM_SHEET_KEY: closure_6, SECURE_FRAMES_USER_VERIFICATION_MODAL_KEY: error } = SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY);
({ ME: closure_8, Routes: c9 } = ME);
const result = require("set").fileFinishedImporting("modules/rtc/SecureFramesPlatformUtils.native.tsx");

export default {
  openSecureFramesStreamVerification(streamKey, channelId) {
    let obj = ACTION_SHEET_HEIGHT_HALFDefault;
    obj = { streamKey, channelId };
    obj.openLazy(asyncRequireImpl(9793, dependencyMap.paths), closure_6, obj);
  },
  openSecureFramesUserVerificationModal(id, id2, arg2) {
    if (arg2()) {
      let obj = _modDef4689;
      obj = { userId: null, channelId: null };
      obj[0] = id;
      obj[1] = id2;
      obj.pushLazy(asyncRequireImpl(9783, dependencyMap.paths), obj, closure_7);
    }
  },
  openSecureFramesUpdateConfirmation(confirmText) {
    confirmText = confirmText.confirmText;
    ({ title, subtitle } = confirmText);
    if (confirmText === undefined) {
      const intl = onConfirm(1236).intl;
      confirmText = intl.string(onConfirm(1236).t["cY+Oob"]);
    }
    onConfirm = confirmText.onConfirm;
    let obj = _modDef4823;
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
        _safeTransitionToDefault(closure_9.CHANNEL(guildId, channelId));
        const tmp6 = _safeTransitionToDefault;
        let obj = { userId: null, channelId: null, guildId: null, fingerprint: null };
        obj[0] = userId;
        obj[1] = channelId;
        obj[2] = guildId;
        obj[3] = fingerprint;
        ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(9796, dependencyMap.paths), closure_5, obj);
        const obj4 = ACTION_SHEET_HEIGHT_HALFDefault;
      }
    }
    obj = { title: null, body: null };
    const intl = getSystemLocale.intl;
    obj[0] = intl.string(getSystemLocale.t["5ICxE6"]);
    const intl2 = getSystemLocale.intl;
    obj[1] = intl2.string(getSystemLocale.t["v1eXp/"]);
    _modDef4823.show(obj);
  }
};