// === Module 16128: SearchableDestinationListRow ===

// Module 16128 (SearchableDestinationListRow)
import Fragment from "Fragment" /* 21 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import UserSearchUtils from "UserSearchUtils" /* 7145 */;
import _mod9496 from "module_9496" /* 9496 */;
import UserRowDefault from "UserRow" /* 10602 */;
import GroupDMRowDefault from "GroupDMRow" /* 10647 */;
import ChannelRowDefault from "ChannelRow" /* 10650 */;
import formatResults from "formatResults" /* 10711 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let _require, importDefault;

let closure_3 = ["result", "onPressDestination"];
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((result) => {
  let closure_0;
  let closure_1;
  let record;
  let tmp5;
  let type;
  let obj = require("react");
  const cResult = obj.c(24);
  if (cResult[0] !== result) {
    result = result.result;
    importDefault = result;
    const onPressDestination = result.onPressDestination;
    _require = onPressDestination;
    const tmp9 = _objectWithoutProperties(result, closure_3);
    cResult[0] = result;
    cResult[1] = onPressDestination;
    cResult[2] = tmp9;
    cResult[3] = result;
    tmp5 = tmp9;
  } else {
    _require = cResult[1];
    tmp5 = cResult[2];
    importDefault = cResult[3];
  }
  ({ type, record } = tmp6);
  if (type === require("module_9496").AutocompleterResultTypes.HEADER) {
    return null;
  } else {
    if (cResult[4] === tmp4) {
      let tmp10;
      if (cResult[5] === tmp6) {
        tmp10 = cResult[6];
      }
      if (require("module_9496").AutocompleterResultTypes.USER === type) {
        let tmp30;
        if (cResult[7] !== record.id) {
          const tmpResult = require("UserSearchUtils");
          const relationshipType = tmpResult.getRelationshipType(record.id);
          cResult[7] = record.id;
          cResult[8] = relationshipType;
          tmp30 = relationshipType;
        } else {
          tmp30 = cResult[8];
        }
        if (cResult[9] === tmp10) {
          if (cResult[10] === tmp5) {
            if (cResult[11] === record) {
              let tmp32;
              if (cResult[12] === tmp30) {
                tmp32 = cResult[13];
              }
              return tmp32;
            }
          }
        }
        UserRowDefault;
        const merged = Object.assign(tmp5);
        const tmp39 = <tmp35 user={record} type={tmp30} onPress={tmp10} />;
        cResult[9] = tmp10;
        cResult[10] = tmp5;
        cResult[11] = record;
        cResult[12] = tmp30;
        cResult[13] = tmp39;
        tmp32 = tmp39;
      } else if (require("module_9496").AutocompleterResultTypes.GROUP_DM === type) {
        if (cResult[14] === tmp10) {
          if (cResult[15] === tmp5) {
            let tmp22;
            if (cResult[16] === record) {
              tmp22 = cResult[17];
            }
            return tmp22;
          }
        }
        GroupDMRowDefault;
        const merged1 = Object.assign(tmp5);
        const tmp29 = <tmp25 channel={record} onPress={tmp10} />;
        cResult[14] = tmp10;
        cResult[15] = tmp5;
        cResult[16] = record;
        cResult[17] = tmp29;
        tmp22 = tmp29;
      } else {
        if (require("module_9496").AutocompleterResultTypes.TEXT_CHANNEL !== type) {
          if (require("module_9496").AutocompleterResultTypes.VOICE_CHANNEL !== type) {
            let tmp12;
            if (cResult[22] !== type) {
              const tmpResult2 = require("GlobalUtils");
              const assertNeverResult = tmpResult2.assertNever(type);
              cResult[22] = type;
              cResult[23] = assertNeverResult;
              tmp12 = assertNeverResult;
            } else {
              tmp12 = cResult[23];
            }
            return tmp12;
          }
        }
        if (cResult[18] === tmp10) {
          if (cResult[19] === tmp5) {
            let tmp14;
            if (cResult[20] === record) {
              tmp14 = cResult[21];
            }
            return tmp14;
          }
        }
        ChannelRowDefault;
        const merged2 = Object.assign(tmp5);
        const tmp21 = <tmp17 channel={record} onPress={tmp10} />;
        cResult[18] = tmp10;
        cResult[19] = tmp5;
        cResult[20] = record;
        cResult[21] = tmp21;
        tmp14 = tmp21;
      }
    }
    let fn;
    if (null != tmp4) {
      fn = () => {
        const obj = formatResults;
        return closure_0(obj.getDestinationIdFromResult(closure_1));
      };
    }
    cResult[4] = tmp4;
    cResult[5] = tmp6;
    cResult[6] = fn;
    tmp10 = fn;
  }
}) : ((result) => {
  let record;
  let type;
  result = result.result;
  const require = result;
  const onPressDestination = result.onPressDestination;
  const merged = Object.assign(result, Object.assign({ result: 0, onPressDestination: 0 }));
  ({ type, record } = result);
  if (type === _mod9496.AutocompleterResultTypes.HEADER) {
    return null;
  } else {
    let fn;
    if (null != onPressDestination) {
      fn = () => {
        const obj = formatResults;
        return onPressDestination(obj.getDestinationIdFromResult(require));
      };
    }
    if (_mod9496.AutocompleterResultTypes.USER === type) {
      onPressDestination(10602);
      const merged1 = Object.assign(merged);
      const tmp2Result = UserSearchUtils;
      return <tmp18 user={record} type={tmp2Result.getRelationshipType(record.id)} onPress={fn} />;
    } else if (_mod9496.AutocompleterResultTypes.GROUP_DM === type) {
      onPressDestination(10647);
      const merged2 = Object.assign(merged);
      return <tmp12 channel={record} onPress={fn} />;
    } else {
      if (_mod9496.AutocompleterResultTypes.TEXT_CHANNEL !== type) {
        if (_mod9496.AutocompleterResultTypes.VOICE_CHANNEL !== type) {
          const tmp2Result2 = GlobalUtils;
          return tmp2Result2.assertNever(type);
        }
      }
      onPressDestination(10650);
      const merged3 = Object.assign(merged);
      return <tmp6 channel={record} onPress={fn} />;
    }
  }
});
let result = size.fileFinishedImporting("modules/share/native/SearchableDestinationListRow.tsx");

export default tmp3;