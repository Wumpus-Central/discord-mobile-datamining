// === Module 8956: GameProfileCommunity ===

// Module 8956 (GameProfileCommunity)
import c from "c" /* 576 */;
import transitionToGuild from "transitionToGuild" /* 7059 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8883 */;
import GameProfileSkeleton from "GameProfileSkeleton" /* 8951 */;
import GameProfileSection from "GameProfileSection" /* 8953 */;
import GameProfileGuildCard from "GameProfileGuildCard" /* 8957 */;
import DisplayedInviteActionCreators from "DisplayedInviteActionCreators" /* 8958 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_5 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GameProfileCommunitySkeleton() {
  const cResult = c.c(1);
  const result = 2 * GameProfileSkeleton.SKELETON_CARD_ANIMATION_DELAY_MS;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { animationDelayMs: result, showViewAllSkeleton: false, skeletonTitleWidth: 80, children: null };
    const obj3 = { animationDelayMs: result };
    obj2.children = jsx(GameProfileGuildCard.GameProfileGuildCardSkeleton, { animationDelayMs: result });
    const tmp7 = jsx(GameProfileSection.GameProfileSectionSkeleton, { animationDelayMs: result, showViewAllSkeleton: false, skeletonTitleWidth: 80, children: null });
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function GameProfileCommunitySkeleton() {
  const result = 2 * GameProfileSkeleton.SKELETON_CARD_ANIMATION_DELAY_MS;
  return jsx(GameProfileSection.GameProfileSectionSkeleton, { animationDelayMs: result, showViewAllSkeleton: false, skeletonTitleWidth: 80, children: jsx(GameProfileGuildCard.GameProfileGuildCardSkeleton, { animationDelayMs: result }) });
}));
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileCommunity.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GameProfileCommunityServer(closeModal) {
  const cResult = trackAction(invite[3]).c(21);
  ({ game, trackAction } = closeModal);
  closeModal = closeModal.closeModal;
  const tmp5 = closeModal(invite[7])(game, closeModal.onInviteResolved);
  invite = tmp5.invite;
  const isMember = tmp5.isMember;
  const isResolving = tmp5.isResolving;
  if (cResult[0] !== game) {
    const result = trackAction(tmp2[7]).hasGameProfileDiscordWebsite(game);
    cResult[0] = game;
    cResult[1] = result;
    let tmp6 = result;
    const tmpResult = trackAction(tmp2[7]);
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === closeModal) {
    if (cResult[3] === invite) {
      if (cResult[4] === isMember) {
        if (cResult[5] === trackAction) {
          let tmp8 = cResult[6];
        }
        if (null != invite) {
          if (null != invite.guild) {
            const _Symbol = Symbol;
            if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = trackAction(tmp2[11]).intl;
              const stringResult = intl.string(trackAction(tmp2[11]).t["U2N+ci"]);
              cResult[10] = stringResult;
              let tmp10 = stringResult;
            } else {
              tmp10 = cResult[10];
            }
            if (cResult[11] !== invite.guild) {
              const fromInviteGuildResult = trackAction(tmp2[12]).fromInviteGuild(invite.guild);
              cResult[11] = invite.guild;
              cResult[12] = fromInviteGuildResult;
              let tmp12 = fromInviteGuildResult;
              const tmpResult2 = trackAction(tmp2[12]);
            } else {
              tmp12 = cResult[12];
            }
            let approximate_presence_count = invite.approximate_presence_count;
            if (approximate_presence_count == null) {
              approximate_presence_count = invite.guild.approximate_presence_count;
            }
            let approximate_member_count = invite.approximate_member_count;
            if (approximate_member_count == null) {
              approximate_member_count = invite.guild.approximate_member_count;
            }
            if (cResult[13] !== isMember) {
              const intl2 = trackAction(tmp2[11]).intl;
              const string = intl2.string;
              let cEnaWx = trackAction(tmp2[11]).t;
              if (isMember) {
                cEnaWx = cEnaWx.cEnaWx;
                let stringResult1 = string(cEnaWx);
              } else {
                stringResult1 = string(cEnaWx.XpeFYr);
              }
              cResult[13] = isMember;
              cResult[14] = stringResult1;
            } else {
              if (cResult[15] === tmp8) {
                if (cResult[16] === tmp12) {
                  if (cResult[17] === approximate_presence_count) {
                    if (cResult[18] === approximate_member_count) {
                      if (cResult[19] === tmp14) {
                        let tmp17 = cResult[20];
                      }
                      return tmp17;
                    }
                  }
                }
              }
              const obj2 = { title: tmp10, children: null };
              const obj3 = { guild: tmp12, presenceCount: approximate_presence_count, memberCount: approximate_member_count, buttonText: cResult[14], onJoin: tmp8 };
              obj2.children = jsx(tmp4(tmp2[6]), { guild: tmp12, presenceCount: approximate_presence_count, memberCount: approximate_member_count, buttonText: cResult[14], onJoin: tmp8 });
              const tmp20 = jsx(tmp4(tmp2[5]), { title: tmp10, children: null });
              cResult[15] = tmp8;
              cResult[16] = tmp12;
              cResult[17] = approximate_presence_count;
              cResult[18] = approximate_member_count;
              cResult[19] = cResult[14];
              cResult[20] = tmp20;
              tmp17 = tmp20;
              const tmp4Result = tmp4(tmp2[5]);
            }
          }
        }
        if (cResult[7] === tmp6) {
          if (cResult[8] === isResolving) {
            let tmp21 = cResult[9];
          }
          return tmp21;
        }
        let tmp22 = null;
        if (tmp6) {
          tmp22 = null;
          if (isResolving) {
            tmp22 = <closure_5 />;
          }
        }
        cResult[7] = tmp6;
        cResult[8] = isResolving;
        cResult[9] = tmp22;
        tmp21 = tmp22;
      }
    }
  }
  const fn = function b() {
    if (null != invite) {
      trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.JoinServer);
      closeModal();
      if (isMember) {
        guild = invite.guild;
        let id;
        if (guild != null) {
          id = guild.id;
        }
        if (null != id) {
          transitionToGuild.transitionToGuild(invite.guild.id);
          const tmp6Result = transitionToGuild;
        }
      }
      DisplayedInviteActionCreators.showInvite(invite.code);
      const tmp6Result2 = DisplayedInviteActionCreators;
    }
  };
  cResult[2] = closeModal;
  cResult[3] = invite;
  cResult[4] = isMember;
  cResult[5] = trackAction;
  cResult[6] = fn;
  tmp8 = fn;
  const obj = trackAction(invite[3]);
}) : (function GameProfileCommunityServer(closeModal) {
  ({ game, trackAction } = closeModal);
  closeModal = closeModal.closeModal;
  let invite;
  const tmp3 = closeModal(invite[7])(game, closeModal.onInviteResolved);
  invite = tmp3.invite;
  const isMember = tmp3.isMember;
  const items = [invite, isMember, trackAction, closeModal];
  const result = trackAction(invite[7]).hasGameProfileDiscordWebsite(game);
  if (null != invite) {
    if (null != invite.guild) {
      const obj2 = { title: null, children: null };
      const intl2 = trackAction(tmp2[11]).intl;
      obj2.title = intl2.string(trackAction(tmp2[11]).t["U2N+ci"]);
      const obj3 = { guild: null, presenceCount: null, memberCount: null, buttonText: null, onJoin: null };
      const tmpResult = tmp(tmp2[5]);
      const tmpResult2 = tmp(tmp2[6]);
      obj3.guild = trackAction(tmp2[12]).fromInviteGuild(invite.guild);
      let approximate_presence_count = invite.approximate_presence_count;
      if (approximate_presence_count == null) {
        approximate_presence_count = invite.guild.approximate_presence_count;
      }
      obj3.presenceCount = approximate_presence_count;
      let approximate_member_count = invite.approximate_member_count;
      if (approximate_member_count == null) {
        approximate_member_count = invite.guild.approximate_member_count;
      }
      obj3.memberCount = approximate_member_count;
      const intl = trackAction(tmp2[11]).intl;
      const string = intl.string;
      const t = trackAction(tmp2[11]).t;
      if (isMember) {
        let stringResult = string(t.cEnaWx);
      } else {
        stringResult = string(t.XpeFYr);
      }
      obj3.buttonText = stringResult;
      obj3.onJoin = tmp6;
      obj2.children = <tmpResult2 guild={null} presenceCount={null} memberCount={null} buttonText={null} onJoin={null} />;
      let tmp12Result = <tmpResult title={null}>{null}</tmpResult>;
      const tmp4Result = trackAction(tmp2[12]);
    }
    return tmp12Result;
  }
  let tmp9 = null;
  if (result) {
    tmp9 = null;
    if (tmp3.isResolving) {
      tmp9 = <closure_5 />;
    }
  }
  tmp12Result = tmp9;
  const obj = trackAction(invite[7]);
});