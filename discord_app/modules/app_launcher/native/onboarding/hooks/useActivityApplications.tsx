// === Module 11666: useActivityApplications ===

// Module 11666 (useActivityApplications)
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 9026 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let guildId;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let tmp3;
  let tmp4;
  let obj = guildId(576);
  const cResult = obj.c(9);
  guildId = guildId.guildId;
  const fetchesShelf = guildId.fetchesShelf;
  if (cResult[0] !== guildId) {
    let obj2 = { guildId };
    cResult[0] = guildId;
    cResult[1] = obj2;
    tmp3 = obj2;
  } else {
    tmp3 = cResult[1];
  }
  const arr = fetchesShelf(11667)(tmp3);
  if (cResult[2] !== arr) {
    let tmp6;
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function s(application) {
        return application.application;
      };
      cResult[4] = fn;
      tmp6 = fn;
    } else {
      tmp6 = cResult[4];
    }
    const mapped = arr.map(tmp6);
    cResult[2] = arr;
    cResult[3] = mapped;
    tmp4 = mapped;
  } else {
    tmp4 = cResult[3];
  }
  if (cResult[5] === fetchesShelf) {
    let tmp8;
    let tmp9;
    if (cResult[6] === guildId) {
      tmp8 = cResult[7];
      tmp9 = cResult[8];
    }
    const effect = react.useEffect(tmp8, tmp9);
    return tmp4;
  }
  const fn2 = function h() {
    if (fetchesShelf) {
      const obj2 = { guildId };
      const obj = EmbeddedActivitiesActionCreators;
      const shelf = obj.fetchShelf(obj2);
    }
  };
  const items = [fetchesShelf, guildId];
  cResult[5] = fetchesShelf;
  cResult[6] = guildId;
  cResult[7] = fn2;
  cResult[8] = items;
  tmp9 = items;
  tmp8 = fn2;
}) : ((guildId) => {
  guildId = guildId.guildId;
  const fetchesShelf = guildId.fetchesShelf;
  const items = [fetchesShelf, guildId];
  const arr = fetchesShelf(11667)({ guildId });
  const mapped = arr.map((application) => application.application);
  const effect = react.useEffect(() => {
    if (fetchesShelf) {
      const obj2 = { guildId };
      const obj = EmbeddedActivitiesActionCreators;
      const shelf = obj.fetchShelf(obj2);
    }
  }, items);
  return mapped;
});
const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/hooks/useActivityApplications.tsx");

export const useActivityApplications = tmp2;