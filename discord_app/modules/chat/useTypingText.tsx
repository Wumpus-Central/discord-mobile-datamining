// discord_app/modules/chat/useTypingText.tsx
import NicknameUtilsDefault from "../../utils/NicknameUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import UserStore from "../../stores/UserStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let channelId;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let first;
      let tmp10;
      let tmp11;
      let tmp12;
      let typingUserIds;
      let tmp2 = typingUserIds;
      let obj = channelId(typingUserIds[3]);
      const cResult = obj.c(16);
      channelId = channelId.channelId;
      const guildId = channelId.guildId;
      typingUserIds = channelId.typingUserIds;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [UserStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === channelId) {
        if (cResult[2] === guildId) {
          let tmp6;
          let tmp7;
          if (cResult[3] === typingUserIds) {
            tmp6 = cResult[4];
            tmp7 = cResult[5];
          }
          const tmpResult = channelId(tmp2[5]);
          [tmp10, tmp11, tmp12] = tmpResult.useStateFromStoresArray(first, tmp6, tmp7);
          let tmp15 = null;
          _slicedToArray(tmpResult.useStateFromStoresArray(first, tmp6, tmp7), 4);
          if (null != tmp10) {
            let tmp16;
            if (null == tmp11) {
              let tmp22;
              if (cResult[6] !== tmp10) {
                const intl4 = tmp(tmp2[6]).intl;
                const obj2 = { a: tmp10 };
                const formatResult = intl4.format(channelId(tmp2[6]).t.lJ9sZX, obj2);
                cResult[6] = tmp10;
                cResult[7] = formatResult;
                tmp22 = formatResult;
              } else {
                tmp22 = cResult[7];
              }
              tmp16 = tmp22;
            } else if (null == tmp12) {
              if (cResult[8] === tmp10) {
                let tmp20;
                if (cResult[9] === tmp11) {
                  tmp20 = cResult[10];
                }
                tmp16 = tmp20;
              }
              const intl3 = tmp(tmp2[6]).intl;
              const obj3 = { a: tmp10, b: tmp11 };
              const formatResult1 = intl3.format(channelId(tmp2[6]).t.rB0CUa, obj3);
              cResult[8] = tmp10;
              cResult[9] = tmp11;
              cResult[10] = formatResult1;
              tmp20 = formatResult1;
            } else if (null == tmp13) {
              if (cResult[11] === tmp10) {
                if (cResult[12] === tmp11) {
                  let tmp18;
                  if (cResult[13] === tmp12) {
                    tmp18 = cResult[14];
                  }
                  tmp16 = tmp18;
                }
              }
              const intl2 = tmp(tmp2[6]).intl;
              const obj4 = { a: tmp10, b: tmp11, c: tmp12 };
              const formatResult2 = intl2.format(channelId(tmp2[6]).t.StKThj, obj4);
              cResult[11] = tmp10;
              cResult[12] = tmp11;
              cResult[13] = tmp12;
              cResult[14] = formatResult2;
              tmp18 = formatResult2;
            } else {
              const _Symbol = Symbol;
              if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                const intl = tmp(tmp2[6]).intl;
                const stringResult = intl.string(channelId(tmp2[6]).t.uVDhqZ);
                cResult[15] = stringResult;
                tmp16 = stringResult;
              } else {
                tmp16 = cResult[15];
              }
            }
            tmp15 = tmp16;
          }
          return tmp15;
        }
      }
      const fn = function u() {
        const items = [];
        const tmp2 = typingUserIds[Symbol.iterator]();
        while (tmp2 !== undefined) {
          let user = UserStore.getUser(tmp3);
          if (null != user) {
            let push = items.push;
            let obj = NicknameUtilsDefault;
            let arr = push(obj.getName(guildId, channelId, tmp6));
          }
          continue;
        }
        return items;
      };
      const items1 = [channelId, guildId, typingUserIds];
      cResult[1] = channelId;
      cResult[2] = guildId;
      cResult[3] = typingUserIds;
      cResult[4] = fn;
      cResult[5] = items1;
      tmp7 = items1;
      tmp6 = fn;
    }
  : (channelId) => {
      let tmp4;
      let tmp5;
      let tmp6;
      channelId = channelId.channelId;
      const guildId = channelId.guildId;
      const typingUserIds = channelId.typingUserIds;
      let tmp2 = typingUserIds;
      let obj = channelId(typingUserIds[5]);
      let items = [UserStore];
      const items1 = [channelId, guildId, typingUserIds];
      const tmp3 = _slicedToArray(
        obj.useStateFromStoresArray(
          items,
          () => {
            const items = [];
            const tmp2 = typingUserIds[Symbol.iterator]();
            while (tmp2 !== undefined) {
              let user = UserStore.getUser(tmp3);
              if (null != user) {
                let push = items.push;
                let obj = NicknameUtilsDefault;
                let arr = push(obj.getName(guildId, channelId, tmp6));
              }
              continue;
            }
            return items;
          },
          items1,
        ),
        4,
      );
      [tmp4, tmp5, tmp6] = tmp3;
      let tmp8 = null;
      if (null != tmp4) {
        let formatResult;
        if (null == tmp5) {
          const intl4 = tmp(tmp2[6]).intl;
          const obj2 = { a: tmp4 };
          formatResult = intl4.format(tmp(tmp2[6]).t.lJ9sZX, obj2);
        } else if (null == tmp6) {
          const intl3 = tmp(tmp2[6]).intl;
          const obj3 = { a: tmp4, b: tmp5 };
          formatResult = intl3.format(tmp(tmp2[6]).t.rB0CUa, obj3);
        } else if (null == tmp7) {
          const intl2 = tmp(tmp2[6]).intl;
          const obj4 = { a: tmp4, b: tmp5, c: tmp6 };
          formatResult = intl2.format(tmp(tmp2[6]).t.StKThj, obj4);
        } else {
          const intl = tmp(tmp2[6]).intl;
          formatResult = intl.string(tmp(tmp2[6]).t.uVDhqZ);
        }
        tmp8 = formatResult;
      }
      return tmp8;
    };
const result = size.fileFinishedImporting("modules/chat/useTypingText.tsx");

export default tmp2;
