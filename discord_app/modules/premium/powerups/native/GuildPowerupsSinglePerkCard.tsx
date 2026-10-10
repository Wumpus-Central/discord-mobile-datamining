// === Module 12306: GuildPowerupsSinglePerkCard ===

// Module 12306 (GuildPowerupsSinglePerkCard)
import c from "c" /* 576 */;
import useGuildPowerupRollbackEnabledDefault from "useGuildPowerupRollbackEnabled" /* 12232 */;
import usePowerupActiveStatusDefault from "usePowerupActiveStatus" /* 12236 */;
import useCalculatePowerupCardStatus from "useCalculatePowerupCardStatus" /* 12253 */;
import useGetGuildPowerupBannerImageDefault from "useGetGuildPowerupBannerImage" /* 12254 */;
import useGuildPowerupOnShowMoreDefault from "useGuildPowerupOnShowMore" /* 12302 */;
import GuildPowerupsPerkCardDefault from "GuildPowerupsPerkCard" /* 12307 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsSinglePerkCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildPowerupsSinglePerkCard(arg0) {
  const cResult = c.c(8);
  ({ guildId, powerup, badge } = arg0);
  const tmp4 = useGetGuildPowerupBannerImageDefault(powerup, true);
  const tmp5 = usePowerupActiveStatusDefault(guildId, powerup);
  const tmp6 = useGuildPowerupRollbackEnabledDefault(guildId, powerup, "GuildPowerupsSinglePerkCard");
  const calculatePowerupCardStatus = useCalculatePowerupCardStatus.useCalculatePowerupCardStatus(powerup, tmp5, tmp6);
  const tmp8 = useGuildPowerupOnShowMoreDefault(guildId, powerup);
  let str = tmp4;
  if (tmp4 == null) {
    str = "";
  }
  if (cResult[0] === badge) {
    if (cResult[1] === tmp8) {
      if (cResult[2] === powerup.cost) {
        if (cResult[3] === powerup.description) {
          if (cResult[4] === powerup.title) {
            if (cResult[5] === calculatePowerupCardStatus) {
              if (cResult[6] === str) {
                let tmp9 = cResult[7];
              }
              return tmp9;
            }
          }
        }
      }
    }
  }
  const tmp10 = jsx(GuildPowerupsPerkCardDefault, { title: powerup.title, description: powerup.description, cost: powerup.cost, imageUrl: str, status: calculatePowerupCardStatus, onPress: tmp8, badge });
  cResult[0] = badge;
  cResult[1] = tmp8;
  cResult[2] = powerup.cost;
  cResult[3] = powerup.description;
  cResult[4] = powerup.title;
  cResult[5] = calculatePowerupCardStatus;
  cResult[6] = str;
  cResult[7] = tmp10;
  tmp9 = tmp10;
  const obj3 = { title: powerup.title, description: powerup.description, cost: powerup.cost, imageUrl: str, status: calculatePowerupCardStatus, onPress: tmp8, badge };
}) : (function GuildPowerupsSinglePerkCard(badge) {
  ({ guildId, powerup } = badge);
  let str = useGetGuildPowerupBannerImageDefault(powerup, true);
  const tmp = usePowerupActiveStatusDefault(guildId, powerup);
  const tmp2 = useGuildPowerupRollbackEnabledDefault(guildId, powerup, "GuildPowerupsSinglePerkCard");
  const calculatePowerupCardStatus = useCalculatePowerupCardStatus.useCalculatePowerupCardStatus(powerup, tmp, tmp2);
  const obj2 = { title: powerup.title, description: powerup.description, cost: powerup.cost, imageUrl: null, status: null, onPress: null, badge: null };
  const tmp4 = useGuildPowerupOnShowMoreDefault(guildId, powerup);
  if (str == null) {
    str = "";
  }
  obj2.imageUrl = str;
  obj2.status = calculatePowerupCardStatus;
  obj2.onPress = tmp4;
  obj2.badge = badge.badge;
  return jsx(GuildPowerupsPerkCardDefault, { title: powerup.title, description: powerup.description, cost: powerup.cost, imageUrl: null, status: null, onPress: null, badge: null });
});