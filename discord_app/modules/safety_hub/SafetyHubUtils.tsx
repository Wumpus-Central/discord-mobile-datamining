// discord_app/modules/safety_hub/SafetyHubUtils.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import getSystemLocale from "../../intl/index.native.tsx";
import tDefault from "../../../_runtime/03975_t.js";
import urlMatchesFileExtension from "../messages/MediaFormatTesters.tsx";
import ContentIdType from "SafetyHubModels.tsx";
import closure_3 from "../../stores/AuthenticationStore.tsx";
import SafetyHubView from "SafetyHubConstants.tsx";
import ME from "../../Constants.tsx";

require = arg1;
function parseMessageEmbedForProps(fields) {
  if (null != fields.fields) {
    fields = fields.fields;
    const reduced = fields.reduce((arg0, rawName) => {
      arg0[rawName.rawName] = rawName.rawValue;
      return arg0;
    }, {});
    let str = reduced[constants3.HEADER];
    if (str == null) {
      str = "";
    }
    const obj = { header: null, icon: null, body: null, ctas: null, timestamp: null, theme: null, learn_more_link: null, classification_id: null };
    obj[0] = str;
    obj[1] = reduced[constants3.ICON_TYPE];
    let str2 = reduced[tmp2.BODY];
    if (str2 == null) {
      str2 = "";
    }
    obj[2] = str2;
    let str3 = reduced[tmp2.CTAS];
    if (str3 == null) {
      str3 = "";
    }
    const parts = str3.split(",");
    obj[3] = parts.filter((arg0) => "" !== arg0);
    let num = reduced[tmp2.TIMESTAMP];
    if (num == null) {
      num = 0;
    }
    obj[4] = parseFloat(num);
    obj[5] = reduced[constants3.THEME];
    obj[6] = reduced[constants3.LEARN_MORE_LINK];
    obj[7] = reduced[constants3.CLASSIFICATION_ID];
    return obj;
  }
}
({ AppealIngestionSignal: c4, SafetySystemNotificationCtaType: c5, SafetySystemNotificationEmbedKeys: closure_6 } = SafetyHubView);
({ AbortCodes: error, MessageAttachmentFlags: closure_8 } = ME);
const result = require("set").fileFinishedImporting("modules/safety_hub/SafetyHubUtils.tsx");

export const getClassificationRelativeIncidentTime = function getClassificationRelativeIncidentTime(timestamp) {
  return tDefault().to(tDefault(timestamp));
};
export const getSpoilerFlagsForAttachment = function getSpoilerFlagsForAttachment(filename) {
  if (obj.isImageFile(filename.filename)) {
    let num = constants5.IS_SPOILER;
  } else {
    num = 0;
    const tmpResult = urlMatchesFileExtension;
  }
  return num;
};
export const parseMessageForProps = function parseMessageForProps(message) {
  return parseMessageEmbedForProps(message.embeds[0]);
};
export { parseMessageEmbedForProps };
export const mapCtaToNativeData = function mapCtaToNativeData(arg0, learn_more_link, classification_id) {
  if (constants2.LEARN_MORE_LINK === arg0) {
    let str2 = learn_more_link;
    let obj = { text: null, type: null, key: null };
    const intl2 = getSystemLocale.intl;
    obj[0] = intl2.string(getSystemLocale.t["8/GdRB"]);
    obj[1] = tmp.LEARN_MORE_LINK;
    if (learn_more_link == null) {
      str2 = "";
    }
    obj[2] = str2;
    return obj;
  } else if (tmp.POLICY_VIOLATION_DETAIL === arg0) {
    let str = classification_id;
    obj = { text: null, type: null, key: null };
    const intl = getSystemLocale.intl;
    obj[0] = intl.string(getSystemLocale.t.QsqdXC);
    obj[1] = tmp.POLICY_VIOLATION_DETAIL;
    if (classification_id == null) {
      str = "";
    }
    obj[2] = str;
    return obj;
  }
};
export const isFlaggedContentEmpty = function isFlaggedContentEmpty(first) {
  let tmp = first.type !== ContentIdType.ContentIdType.MESSAGE;
  if (!tmp) {
    let tmp2 = "" === first.content;
    if (tmp2) {
      tmp2 = 0 === first.attachments.length;
    }
    tmp = tmp2;
  }
  return tmp;
};
export const getAppealSignalDisplayText = function getAppealSignalDisplayText(signal) {
  const obj = {};
  const intl = getSystemLocale.intl;
  obj[constants.DIDNT_VIOLATE_POLICY] = intl.string(getSystemLocale.t.mZffAi);
  const intl2 = getSystemLocale.intl;
  obj[constants.TOO_STRICT_UNFAIR] = intl2.string(getSystemLocale.t.wgZVAn);
  const intl3 = getSystemLocale.intl;
  obj[constants.DONT_AGREE_PENALTY] = intl3.string(getSystemLocale.t.eu8G4k);
  const intl4 = getSystemLocale.intl;
  obj[constants.SOMETHING_ELSE] = intl4.string(getSystemLocale.t.XU3s6r);
  return obj[signal];
};
export const capitalizeText = function capitalizeText(description) {
  let str = "";
  if (null != description) {
    str = "";
    if (0 !== description.length) {
      if (1 === description.length) {
        let formatted = description.toUpperCase();
      } else {
        const formatted1 = description.charAt(0).toUpperCase();
        const _HermesInternal = HermesInternal;
        formatted = "" + formatted1 + description.slice(1);
        const str2 = description.charAt(0);
      }
    }
  }
  return str;
};
export const isGuildClassification = function isGuildClassification(stateFromStores) {
  return null != stateFromStores && null != stateFromStores.guild_metadata;
};
export const getRequestReviewErrorFromCode = function getRequestReviewErrorFromCode(code) {
  if (code === constants4.DSA_APPEAL_REQUEST_DEFLECTION) {
    const intl2 = getSystemLocale.intl;
    let stringResult = intl2.string(getSystemLocale.t["0qyXXH"]);
  } else {
    const intl = getSystemLocale.intl;
    stringResult = intl.string(getSystemLocale.t.aPmsx3);
  }
  return stringResult;
};
export const getClassificationExpiration = function getClassificationExpiration(classification) {
  const max_expiration_time = classification.max_expiration_time;
  if (null == max_expiration_time) {
    return null;
  } else {
    try {
      const _Date = Date;
      const date = new Date(max_expiration_time);
      return date;
    } catch (err) {
      return tmp;
    }
  }
};
export const useIsSuspendedUser = function useIsSuspendedUser() {
  const items = [closure_3];
  return null != initialize.useStateFromStores(items, () => suspendedUserToken.getSuspendedUserToken());
};
export const isCurrentUserSuspended = function isCurrentUserSuspended() {
  return null != suspendedUserToken.getSuspendedUserToken();
};