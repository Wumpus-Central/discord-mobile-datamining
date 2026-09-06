// discord_app/modules/safety_hub/SafetyHubUtils.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import util from "../../intl/index.native.tsx";
import _modDef4153 from "../../../_runtime/metro/04153__.js";
import MediaFormatTesters from "../messages/MediaFormatTesters.tsx";
import SafetyHubModels from "SafetyHubModels.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";

require = fn;
function parseMessageEmbedForProps(fields) {
  if (null != fields.fields) {
    fields = fields.fields;
    const reduced = fields.reduce((acc, rawName) => {
      acc[rawName.rawName] = rawName.rawValue;
      return acc;
    }, {});
    let str = reduced[constants3.HEADER];
    if (str == null) {
      str = "";
    }
    const obj = {
      header: str,
      icon: reduced[constants3.ICON_TYPE],
      body: null,
      ctas: null,
      timestamp: null,
      theme: null,
      learn_more_link: null,
      classification_id: null,
    };
    let str2 = reduced[tmp2.BODY];
    if (str2 == null) {
      str2 = "";
    }
    obj.body = str2;
    let str3 = reduced[tmp2.CTAS];
    if (str3 == null) {
      str3 = "";
    }
    const parts = str3.split(",");
    obj.ctas = parts.filter((item) => "" !== item);
    let num = reduced[tmp2.TIMESTAMP];
    if (num == null) {
      num = 0;
    }
    obj.timestamp = parseFloat(num);
    obj.theme = reduced[constants3.THEME];
    obj.learn_more_link = reduced[constants3.LEARN_MORE_LINK];
    obj.classification_id = reduced[constants3.CLASSIFICATION_ID];
    return obj;
  }
}
const SafetyHubConstants = fn(8419);
({
  AppealIngestionSignal: closure_4,
  SafetySystemNotificationCtaType: hasOwnProperty,
  SafetySystemNotificationEmbedKeys: metroRequire,
} = SafetyHubConstants);
const Constants = fn(1074);
({ AbortCodes: closure_7, MessageAttachmentFlags: closure_8 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/SafetyHubUtils.tsx");

export const getClassificationRelativeIncidentTime = function getClassificationRelativeIncidentTime(timestamp) {
  return _modDef4153().to(_modDef4153(timestamp));
};
export const getSpoilerFlagsForAttachment = function getSpoilerFlagsForAttachment(filename) {
  if (obj.isImageFile(filename.filename)) {
    let num = constants5.IS_SPOILER;
  } else {
    num = 0;
    const tmpResult = MediaFormatTesters;
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
    const intl2 = util.intl;
    obj.text = intl2.string(util.t["8/GdRB"]);
    obj.type = tmp.LEARN_MORE_LINK;
    if (learn_more_link == null) {
      str2 = "";
    }
    obj.key = str2;
    return obj;
  } else if (tmp.POLICY_VIOLATION_DETAIL === arg0) {
    let str = classification_id;
    obj = { text: null, type: null, key: null };
    const intl = util.intl;
    obj.text = intl.string(util.t.QsqdXC);
    obj.type = tmp.POLICY_VIOLATION_DETAIL;
    if (classification_id == null) {
      str = "";
    }
    obj.key = str;
    return obj;
  }
};
export const isFlaggedContentEmpty = function isFlaggedContentEmpty(type) {
  let tmp = type.type !== SafetyHubModels.ContentIdType.MESSAGE;
  if (!tmp) {
    let tmp2 = "" === type.content;
    if (tmp2) {
      tmp2 = 0 === type.attachments.length;
    }
    tmp = tmp2;
  }
  return tmp;
};
export const getAppealSignalDisplayText = function getAppealSignalDisplayText(signal) {
  const obj = {};
  const intl = util.intl;
  obj[constants.DIDNT_VIOLATE_POLICY] = intl.string(util.t.mZffAi);
  const intl2 = util.intl;
  obj[constants.TOO_STRICT_UNFAIR] = intl2.string(util.t.wgZVAn);
  const intl3 = util.intl;
  obj[constants.DONT_AGREE_PENALTY] = intl3.string(util.t.eu8G4k);
  const intl4 = util.intl;
  obj[constants.SOMETHING_ELSE] = intl4.string(util.t.XU3s6r);
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
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t["0qyXXH"]);
  } else {
    const intl = util.intl;
    stringResult = intl.string(util.t.aPmsx3);
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
  const items = [AuthenticationStore];
  return null != initialize.useStateFromStores(items, () => suspendedUserToken.getSuspendedUserToken());
};
export const isCurrentUserSuspended = function isCurrentUserSuspended() {
  return null != AuthenticationStore.getSuspendedUserToken();
};
