// === Module 11652: useActivityApplications ===

// Module 11652 (useActivityApplications)
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 8993 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/hooks/useActivityApplications.tsx");

export const useActivityApplications = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(576).c(9);
  guildId = guildId.guildId;
  const fetchesShelf = guildId.fetchesShelf;
  if (cResult[0] !== guildId) {
    let obj2 = { guildId };
    cResult[0] = guildId;
    cResult[1] = obj2;
    let tmp3 = obj2;
  } else {
    tmp3 = cResult[1];
  }
  const arr = fetchesShelf(11653)(tmp3);
  if (cResult[2] !== arr) {
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function s(application) {
        return application.application;
      };
      cResult[4] = fn;
      let tmp6 = fn;
    } else {
      tmp6 = cResult[4];
    }
    const mapped = arr.map(tmp6);
    cResult[2] = arr;
    cResult[3] = mapped;
  } else {
    if (cResult[5] === fetchesShelf) {
      if (cResult[6] === guildId) {
        let tmp9 = cResult[7];
        let tmp10 = cResult[8];
      }
      const effect = noop.useEffect(tmp9, tmp10);
      return tmp4;
    }
    const fn2 = function h() {
      if (fetchesShelf) {
        const obj2 = { guildId };
        const shelf = EmbeddedActivitiesActionCreators.fetchShelf(obj2);
      }
    };
    const items = [fetchesShelf, guildId];
    cResult[5] = fetchesShelf;
    cResult[6] = guildId;
    cResult[7] = fn2;
    cResult[8] = items;
    tmp10 = items;
    tmp9 = fn2;
  }
  let obj = guildId(576);
}) : ((guildId) => {
  guildId = guildId.guildId;
  const fetchesShelf = guildId.fetchesShelf;
  const items = [fetchesShelf, guildId];
  const mapped = fetchesShelf(11653)({ guildId }).map((application) => application.application);
  const effect = noop.useEffect(() => {
    if (fetchesShelf) {
      const obj2 = { guildId };
      const shelf = EmbeddedActivitiesActionCreators.fetchShelf(obj2);
    }
  }, items);
  return mapped;
});