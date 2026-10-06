// === Module 8125: SafetyHubUtils ===

// Module 8125 (SafetyHubUtils)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import intl5 from "intl" /* 1126 */;
import _modDef4467 from "module_4467" /* 4467 */;
import MediaFormatTesters from "MediaFormatTesters" /* 5046 */;
import SafetyHubModels from "SafetyHubModels" /* 8127 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import SafetyHubConstants from "SafetyHubConstants" /* 8126 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function parseMessageEmbedForProps(fields) {
  let _parseFloat;
  let num;
  let parts;
  let str2;
  if (null != fields.fields) {
    fields = fields.fields;
    const reduced = fields.reduce((acc, rawName) => {
      acc[rawName.rawName] = rawName.rawValue;
      return acc;
    }, {});
    let str = reduced[metroRequire.HEADER];
    if (str == null) {
      str = "";
    }
    const obj = { header: str, icon: reduced[metroRequire.ICON_TYPE], body: str2, ctas: parts.filter((item) => "" !== item), timestamp: _parseFloat(num), theme: reduced[metroRequire.THEME], learn_more_link: reduced[metroRequire.LEARN_MORE_LINK], classification_id: reduced[metroRequire.CLASSIFICATION_ID] };
    str2 = reduced[metroRequire.BODY];
    if (str2 == null) {
      str2 = "";
    }
    let str3 = reduced[metroRequire.CTAS];
    if (str3 == null) {
      str3 = "";
    }
    parts = str3.split(",");
    num = reduced[metroRequire.TIMESTAMP];
    _parseFloat = parseFloat;
    if (num == null) {
      num = 0;
    }
    return obj;
  }
}
({ AppealIngestionSignal: closure_4, SafetySystemNotificationCtaType: hasOwnProperty, SafetySystemNotificationEmbedKeys: metroRequire } = SafetyHubConstants);
({ AbortCodes: metroImportDefault, MessageAttachmentFlags: metroImportAll } = Constants);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let suspendedUserToken;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore];
    const fn = function s() {
      return suspendedUserToken.getSuspendedUserToken();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return null != tmpResult.useStateFromStores(tmp4, tmp5);
}) : (() => {
  let suspendedUserToken;
  const items = [AuthenticationStore];
  const obj = get_initialized;
  return null != obj.useStateFromStores(items, () => suspendedUserToken.getSuspendedUserToken());
});
const result = size.fileFinishedImporting("modules/safety_hub/SafetyHubUtils.tsx");

export const getClassificationRelativeIncidentTime = function getClassificationRelativeIncidentTime(timestamp) {
  const obj = _modDef4467();
  return obj.to(_modDef4467(timestamp));
};
export const getSpoilerFlagsForAttachment = function getSpoilerFlagsForAttachment(filename) {
  let num;
  const obj = MediaFormatTesters;
  if (obj.isImageFile(filename.filename)) {
    num = metroImportAll.IS_SPOILER;
  } else {
    MediaFormatTesters;
    num = 0;
  }
  return num;
};
export const parseMessageForProps = function parseMessageForProps(message) {
  return parseMessageEmbedForProps(message.embeds[0]);
};
export { parseMessageEmbedForProps };
export const mapCtaToNativeData = function mapCtaToNativeData(arg0, learn_more_link, classification_id) {
  let intl;
  let intl2;
  if (hasOwnProperty.LEARN_MORE_LINK === arg0) {
    let str2 = learn_more_link;
    const obj2 = { text: intl2.string(intl5.t["8/GdRB"]), type: hasOwnProperty.LEARN_MORE_LINK, key: str2 };
    intl2 = intl5.intl;
    if (learn_more_link == null) {
      str2 = "";
    }
    return obj2;
  } else if (hasOwnProperty.POLICY_VIOLATION_DETAIL === arg0) {
    let str = classification_id;
    const obj = { text: intl.string(intl5.t.QsqdXC), type: hasOwnProperty.POLICY_VIOLATION_DETAIL, key: str };
    intl = intl5.intl;
    if (classification_id == null) {
      str = "";
    }
    return obj;
  }
};
export const isFlaggedContentEmpty = function isFlaggedContentEmpty(type) {
  let tmp = type.type !== SafetyHubModels.ContentIdType.MESSAGE;
  if (!tmp) {
    tmp = "" === type.content && 0 === type.attachments.length;
    const tmp2 = "" === type.content && 0 === type.attachments.length;
  }
  return tmp;
};
export const getAppealSignalDisplayText = function getAppealSignalDisplayText(signal) {
  const obj = {};
  const DIDNT_VIOLATE_POLICY = constants.DIDNT_VIOLATE_POLICY;
  const intl = intl5.intl;
  obj[DIDNT_VIOLATE_POLICY] = intl.string(intl5.t.mZffAi);
  const TOO_STRICT_UNFAIR = constants.TOO_STRICT_UNFAIR;
  const intl2 = intl5.intl;
  obj[TOO_STRICT_UNFAIR] = intl2.string(intl5.t.wgZVAn);
  const DONT_AGREE_PENALTY = constants.DONT_AGREE_PENALTY;
  const intl3 = intl5.intl;
  obj[DONT_AGREE_PENALTY] = intl3.string(intl5.t.eu8G4k);
  const SOMETHING_ELSE = constants.SOMETHING_ELSE;
  const intl4 = intl5.intl;
  obj[SOMETHING_ELSE] = intl4.string(intl5.t.XU3s6r);
  return obj[signal];
};
export const capitalizeText = function capitalizeText(description) {
  let str = "";
  if (null != description) {
    str = "";
    if (0 !== description.length) {
      let formatted;
      if (1 === description.length) {
        formatted = description.toUpperCase();
      } else {
        const str2 = description.charAt(0);
        const formatted1 = str2.toUpperCase();
        const _HermesInternal = HermesInternal;
        formatted = "" + formatted1 + description.slice(1);
      }
      str = formatted;
    }
  }
  return str;
};
export const isGuildClassification = function isGuildClassification(stateFromStores) {
  return null != stateFromStores && null != stateFromStores.guild_metadata;
};
export const getRequestReviewErrorFromCode = function getRequestReviewErrorFromCode(code) {
  let stringResult;
  if (code === metroImportDefault.DSA_APPEAL_REQUEST_DEFLECTION) {
    const intl2 = intl5.intl;
    stringResult = intl2.string(intl5.t["0qyXXH"]);
  } else {
    const intl = intl5.intl;
    stringResult = intl.string(intl5.t.aPmsx3);
  }
  return stringResult;
};
export const getClassificationAccountStatusExpiration = function getClassificationAccountStatusExpiration(classification) {
  const actions = classification.actions;
  if (actions.some((action_type) => action_type.action_type === SafetyHubModels.ActionType.BAN)) {
    return null;
  } else {
    const max_expiration_time = classification.max_expiration_time;
    if (null != max_expiration_time) {
      if (true !== classification.has_indefinite_suspension) {
        try {
          const _Date = Date;
          const self = this;
          const self2 = this;
          const date = new Date(max_expiration_time);
          return date;
        } catch (err) {
          return null;
        }
      }
    }
    return null;
  }
};
export const useIsSuspendedUser = tmp4;
export const isCurrentUserSuspended = function isCurrentUserSuspended() {
  return null != AuthenticationStore.getSuspendedUserToken();
};