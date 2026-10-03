// discord_app/modules/share/native/SearchableDestinationListRow.tsx
import sortByMatchScore from "../../autocompleter/index.tsx";
import UserRowDefault from "../../main_tabs_v2/native/shared_components/user_list/UserRow.tsx";
import GroupDMRowDefault from "../../main_tabs_v2/native/shared_components/user_list/GroupDMRow.tsx";
import ChannelRowDefault from "../../main_tabs_v2/native/shared_components/user_list/ChannelRow.tsx";
import formatResults from "../formatResults.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = ["result", "onPressDestination"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/share/native/SearchableDestinationListRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (result) => {
      const cResult = require("c").c(24);
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
        let tmp5 = tmp9;
      } else {
        _require = cResult[1];
        tmp5 = cResult[2];
        importDefault = cResult[3];
      }
      ({ type, record } = tmp6);
      if (type === require("sortByMatchScore").AutocompleterResultTypes.HEADER) {
        return null;
      } else {
        if (cResult[4] === tmp4) {
          if (cResult[5] === tmp6) {
            let tmp10 = cResult[6];
          }
          if (tmp(9496).AutocompleterResultTypes.USER === type) {
            if (cResult[7] !== record.id) {
              const relationshipType = tmp(7145).getRelationshipType(record.id);
              cResult[7] = record.id;
              cResult[8] = relationshipType;
              let tmp30 = relationshipType;
              const tmpResult = tmp(7145);
            } else {
              tmp30 = cResult[8];
            }
            if (cResult[9] === tmp10) {
              if (cResult[10] === tmp5) {
                if (cResult[11] === record) {
                  if (cResult[12] === tmp30) {
                    let tmp32 = cResult[13];
                  }
                  return tmp32;
                }
              }
            }
            const obj2 = {};
            const merged = Object.assign(tmp5);
            obj2.user = record;
            obj2.type = tmp30;
            obj2.onPress = tmp10;
            const tmp39 = jsx(UserRowDefault, {});
            cResult[9] = tmp10;
            cResult[10] = tmp5;
            cResult[11] = record;
            cResult[12] = tmp30;
            cResult[13] = tmp39;
            tmp32 = tmp39;
          } else if (tmp(9496).AutocompleterResultTypes.GROUP_DM === type) {
            if (cResult[14] === tmp10) {
              if (cResult[15] === tmp5) {
                if (cResult[16] === record) {
                  let tmp22 = cResult[17];
                }
                return tmp22;
              }
            }
            const obj3 = {};
            const merged1 = Object.assign(tmp5);
            obj3.channel = record;
            obj3.onPress = tmp10;
            const tmp29 = jsx(GroupDMRowDefault, {});
            cResult[14] = tmp10;
            cResult[15] = tmp5;
            cResult[16] = record;
            cResult[17] = tmp29;
            tmp22 = tmp29;
          } else {
            if (tmp(9496).AutocompleterResultTypes.TEXT_CHANNEL !== type) {
              if (tmp(9496).AutocompleterResultTypes.VOICE_CHANNEL !== type) {
                if (cResult[22] !== type) {
                  const assertNeverResult = tmp(1375).assertNever(type);
                  cResult[22] = type;
                  cResult[23] = assertNeverResult;
                  let tmp12 = assertNeverResult;
                  const tmpResult2 = tmp(1375);
                } else {
                  tmp12 = cResult[23];
                }
                return tmp12;
              }
            }
            if (cResult[18] === tmp10) {
              if (cResult[19] === tmp5) {
                if (cResult[20] === record) {
                  let tmp14 = cResult[21];
                }
                return tmp14;
              }
            }
            const obj4 = {};
            const merged2 = Object.assign(tmp5);
            obj4.channel = record;
            obj4.onPress = tmp10;
            const tmp21 = jsx(ChannelRowDefault, {});
            cResult[18] = tmp10;
            cResult[19] = tmp5;
            cResult[20] = record;
            cResult[21] = tmp21;
            tmp14 = tmp21;
          }
        }
        let fn;
        if (null != tmp4) {
          fn = () => closure_0(formatResults.getDestinationIdFromResult(closure_1));
        }
        cResult[4] = tmp4;
        cResult[5] = tmp6;
        cResult[6] = fn;
        tmp10 = fn;
      }
      const obj = require("c");
    }
  : (result) => {
      result = result.result;
      const require = result;
      const onPressDestination = result.onPressDestination;
      const merged = Object.assign(result, Object.assign({ result: 0, onPressDestination: 0 }));
      ({ type, record } = result);
      if (type === sortByMatchScore.AutocompleterResultTypes.HEADER) {
        return null;
      } else {
        if (null != onPressDestination) {
          const fn = () => onPressDestination(formatResults.getDestinationIdFromResult(result));
        }
        if (tmp2(9496).AutocompleterResultTypes.USER === type) {
          const obj = {};
          const merged1 = Object.assign(merged);
          obj.user = record;
          const tmp18 = onPressDestination(10602);
          obj.type = tmp2(7145).getRelationshipType(record.id);
          obj.onPress = fn;
          return <tmp18 />;
        } else if (tmp2(9496).AutocompleterResultTypes.GROUP_DM === type) {
          const obj2 = {};
          const merged2 = Object.assign(merged);
          obj2.channel = record;
          obj2.onPress = fn;
          return jsx(onPressDestination(10647), {});
        } else {
          if (tmp2(9496).AutocompleterResultTypes.TEXT_CHANNEL !== type) {
            if (tmp2(9496).AutocompleterResultTypes.VOICE_CHANNEL !== type) {
              return tmp2(1375).assertNever(type);
            }
          }
          const obj3 = {};
          const merged3 = Object.assign(merged);
          obj3.channel = record;
          obj3.onPress = fn;
          return jsx(onPressDestination(10650), {});
        }
      }
    };
