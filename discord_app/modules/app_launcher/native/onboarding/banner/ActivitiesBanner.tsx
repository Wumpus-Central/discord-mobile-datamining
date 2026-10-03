// === Module 11663: ActivitiesBanner ===

// Module 11663 (ActivitiesBanner)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import useActivityApplications from "useActivityApplications" /* 11652 */;
import ApplicationsImageDefault from "ApplicationsImage" /* 11664 */;
import BannerBaseDefault from "BannerBase" /* 11675 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/ActivitiesBanner.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((context) => {
  let tmp2 = dependencyMap;
  const cResult = c.c(10);
  context = context.context;
  if (cResult[0] !== context.channel.guild_id) {
    const obj2 = { guildId: context.channel.guild_id, fetchesShelf: false };
    cResult[0] = context.channel.guild_id;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const tmpResult = useActivityApplications;
  [tmp6, tmp7] = useActivityApplications.useActivityApplications(tmp4);
  if (cResult[2] === tmp6) {
    if (cResult[3] === tmp7) {
      let tmp8 = cResult[4];
    }
    let tmp11 = null;
    if (null != tmp6) {
      tmp11 = null;
      if (null != tmp7) {
        if (cResult[5] !== tmp6.name) {
          const intl = util.intl;
          const obj3 = { activityName: tmp6.name };
          const formatToPlainStringResult = intl.formatToPlainString(util.t.zHMWuV, obj3);
          cResult[5] = tmp6.name;
          cResult[6] = formatToPlainStringResult;
          let tmp12 = formatToPlainStringResult;
        } else {
          tmp12 = cResult[6];
        }
        if (cResult[7] === tmp8) {
        }
        const obj4 = { image: tmp8, text: tmp12 };
        tmp2 = jsx(BannerBaseDefault, { image: tmp8, text: tmp12 });
        cResult[7] = tmp8;
        cResult[8] = tmp12;
        cResult[9] = tmp2;
      }
    }
    return tmp11;
  }
  const tmp9 = jsx(ApplicationsImageDefault, { firstApplication: tmp6, secondApplication: tmp7 });
  cResult[2] = tmp6;
  cResult[3] = tmp7;
  cResult[4] = tmp9;
  tmp8 = tmp9;
  const tmp5 = _slicedToArray(useActivityApplications.useActivityApplications(tmp4), 2);
}) : ((context) => {
  const obj2 = { guildId: context.context.channel.guild_id, fetchesShelf: false };
  [tmp4, tmp5] = useActivityApplications.useActivityApplications({ guildId: context.context.channel.guild_id, fetchesShelf: false });
  let tmp6Result = null;
  if (null != tmp4) {
    tmp6Result = null;
    if (null != tmp5) {
      const obj3 = { image: tmp8, text: null };
      const intl = util.intl;
      const obj4 = { activityName: tmp4.name };
      obj3.text = intl.formatToPlainString(util.t.zHMWuV, obj4);
      tmp6Result = jsx(BannerBaseDefault, { image: tmp8, text: null });
      const tmp7Result = BannerBaseDefault;
    }
  }
  return tmp6Result;
});