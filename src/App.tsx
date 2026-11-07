import * as React from 'react';
import { useState } from 'react';

// --- 무설치 자체 아이콘 (lucide-react 대체) ---
const IconMessageCircle = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>;
const IconChevronDown = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m6 9 6 6 6-6"/></svg>;
const IconChevronUp = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m18 15-6-6-6 6"/></svg>;
const IconChevronLeft = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m15 18-6-6 6-6"/></svg>;
const IconChevronRight = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6"/></svg>;

// --- Reusable UI Components ---
const Blockquote = ({ text, author }: { text: string; author?: string }) => (
  <div className="my-4 border-l-4 border-gray-400 bg-gray-50 p-4 rounded-r-lg shadow-sm">
    <p className="italic text-gray-700 leading-relaxed whitespace-pre-wrap">{text}</p>
    {author && <p className="mt-2 text-sm font-semibold text-gray-900 text-right">- {author}</p>}
  </div>
);

const Callout = ({ children, icon: Icon }: { children: React.ReactNode; icon?: React.ElementType }) => (
  <div className="flex gap-3 my-5 p-4 rounded-lg bg-blue-50 border border-blue-100 text-blue-900 shadow-sm">
    {Icon && <Icon className="w-6 h-6 text-blue-500 shrink-0" />}
    <div className="leading-relaxed font-medium whitespace-pre-wrap">{children}</div>
  </div>
);

const AccordionItem = ({ title, children, isOpen, onClick }: { title: string; children: React.ReactNode; isOpen: boolean; onClick: () => void }) => (
  <div className="border border-gray-200 rounded-lg mb-3 overflow-hidden shadow-sm bg-white">
    <button
      className="w-full px-4 py-4 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
      onClick={onClick}
    >
      <span className="font-semibold text-gray-800 pr-4 text-left">{title}</span>
      {isOpen ? (
        <IconChevronUp className="w-5 h-5 text-gray-500 shrink-0" />
      ) : (
        <IconChevronDown className="w-5 h-5 text-gray-500 shrink-0" />
      )}
    </button>
    {isOpen && (
      <div className="p-4 text-gray-700 leading-relaxed bg-white border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
        <ul className="list-disc pl-5 space-y-2">{children}</ul>
      </div>
    )}
  </div>
);

// --- Step Content Components ---

const Step0_Title = () => (
  <div className="space-y-6 flex flex-col justify-center min-h-[60vh] text-center relative">
    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 leading-snug">
      찬양을 어떻게 부르고<br/>연주해야 할까?
    </h1>
    <p className="text-gray-500">화면을 넘겨 나눔을 시작해보세요!</p>
    
    <div className="mt-12 text-xs text-gray-400 space-y-1">
      <p>원문 - 이정규 목사: 시광교회의 예배음악</p>
      <p>요약 및 재구성 - 전윤배와 gemini</p>
    </div>
  </div>
);

const Step1_IceBreaking = () => (
  <div className="space-y-5">
    <div className="flex items-center gap-2 mb-2">
      <span className="text-xl">🧊</span>
      <h2 className="text-xl font-bold text-gray-900">Ice Breaking</h2>
    </div>
    
    <hr className="border-gray-200 my-2" />

    <div className="w-full aspect-[9/16] max-h-[60vh] rounded-lg overflow-hidden shadow-sm mx-auto flex justify-center bg-black">
      <iframe 
        width="100%" 
        height="100%" 
        src="https://www.youtube.com/embed/F0Kkq3qqLB0" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen 
        className="border-0"
      ></iframe>
    </div>

    <div className="bg-gray-100 p-4 rounded-lg text-sm text-gray-700 leading-relaxed font-mono whitespace-pre-wrap">
      {`그대 폭풍 속을 걷고 있을 때\n비바람을 마주해야 할 때\n불빛조차 보이지 않아도\n그대 혼자 걷지 않을 거예요\n두려움 앞에서 하늘을 보아요\n외로운 그대여 걱정 마요\n꿈꾸는 그 길을 또 걷고 걸어요\n그대 혼자 걷지 않을 거예요\n\n- *혼자 걷지 않을거에요 中*`}
    </div>

    <h3 className="text-lg font-bold text-gray-900 mt-6">✋🏻 이 곡, 주일 예배 때 해도 될까?</h3>
    <p className="text-gray-700 leading-relaxed">
      최근 예람워십의 &lt;<strong>혼자 걷지 않을 거예요</strong>&gt;가 비기독교인에게 많은 사랑을 받았어. 유튜브 인기 동영상에 등극되기도 하고, 예람 워십은 유튜브 아티스트 TOP50에 선정되었어. 그런데 정작 기독교계 커뮤니티는 논쟁이 들끓었어. <em>“이 노래는 예배 때 사용할 수 없어!”</em> 부터, <em>“가사에 하나님이 없는데 어떻게 찬양이야!”</em> 까지, 부정적인 목소리가 적지 않았어. 
    </p>

    <Callout icon={IconMessageCircle}>
      만약 우리 찬양팀 중 누군가 이 곡을 2부 예배 때 사용하자고 건의한다면, 찬성할 것 같아 아니면 반대할 것 같아?
    </Callout>
  </div>
);

const Step2_Intro = () => (
  <div className="space-y-5">
    <div className="flex items-center gap-2 mb-2">
      <span className="text-xl">📚</span>
      <h2 className="text-xl font-bold text-gray-900">본문</h2>
    </div>
    <hr className="border-gray-200 my-2" />
    
    <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 leading-snug">
      예배시의 음악사용과 문화에 대하여
    </h2>
    <p className="text-gray-500 text-sm">원문 - 이정규 목사 (시광교회)</p>
    
    <p className="text-gray-700 leading-relaxed mt-4">
      교회 안에서 음악은 무척 예민한 문제야. 성도들이 쉽게 화를 내거나 상처 받기도 하거든. 스펄전 목사님은 그의 음악 사역을 ‘전쟁 부서’라고 불렀어. 미국의 기독교 작가 제임스 답슨(James Dobson)은 음악이 교회에 많은 분쟁을 가져왔다면서 이렇게 덧붙였어. 
    </p>

    <Blockquote 
      text={`🎙️ "우리가 라디오 방송에서 다룬 모든 주제 중에서 가장 논쟁이 컸던 주제는 음악입니다. 다른 어떤 것보다도 사람들을 더 빨리 화나게 만들 수 있는 주제가 바로 음악입니다."`} 
    />
    
    <p className="text-gray-700 leading-relaxed">
      그래서 우리는 이 주제를 더 진지하고 조심스럽게 다룰 필요가 있어. 그럼 시작해볼까? 👀
    </p>
  </div>
);

const Step3_TwoViews = () => (
  <div className="space-y-5">
    <h3 className="text-xl font-bold text-gray-900">✌️ 예배 음악을 바라보는 두 가지 시선</h3>
    <p className="text-gray-700 leading-relaxed">에배 음악은 크게 두 가지 입장으로 나눌 수 있어.</p>
    
    <div className="space-y-3 mt-4">
      <h4 className="text-lg font-bold text-gray-800 flex items-center gap-2">🎸 현대적 관점: 전도를 위해 대중음악을 활용하자!</h4>
      <p className="text-gray-700 leading-relaxed">
        옛 찬송가는 현대인에게 공감을 불러일으킬 수 없다는 입장이야. 하나님께서 우리에게 전도의 대상을 정해주셨다면, 그들에게 맞는 음악을 선택해야 한다는 거지. 대체로 이러한 생각은 예배음악과 대중음악을 연결하려고 해. 나쁜 건 아니지만, 몇 가지 맹점이 있어.
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed">
        <li><strong>과거와의 단절:</strong> 옛 찬양을 피하다 보니 신앙의 선배들과 멀어지게 돼.</li>
        <li><strong>빈약한 가사:</strong> 찬송가들은 교리를 깊이 있게 풀어내는 경향이 있어. 그래서 가사가 보통 3~5절까지 이르지. 그러나 요즘 곡들은 ‘대체로’ 가사가 짧고 반복적이야. 새신자들이 노래를 통해 기독교 교리를 배울 기회를 앗아갈 수도 있어.</li>
        <li><strong>금방 뒤쳐짐:</strong> 유행하는 음악을 차용하면 금방 흘러간 옛 노래가 되어 버려. 밴드 사운드의 CCM이 어떤 세대(86, X세대)에겐 '젊은 음악'이지만, 요즘 Z세대들에겐 '부모 세대의 옛날 음악'일 뿐이야.</li>
      </ul>
    </div>

    <hr className="border-gray-200 my-6" />

    <div className="space-y-3">
      <h4 className="text-lg font-bold text-gray-800 flex items-center gap-2">🏛️ 역사적 예배관점: 올바른 방식의 음악표현이 있다!</h4>
      <p className="text-gray-700 leading-relaxed">
        이분들은 현대 대중음악이 가벼워서 예배를 오염시킨다고 생각해. 고전적 예배만이 역사적으로 올바른 방식의 찬양이라는 입장이야. 여기에도 문제가 있지.
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed">
        <li><strong>역사적으로 옳다?:</strong> 우리가 전통적이라고 부르는 예배 음악은 사실 16세기 '유럽 중산층'의 문화야.</li>
      </ul>
      <Blockquote 
        text={`"엄격히 현대적 예배를 옹호하는 이들은 예배를 어느 한 현대 문화와 지나치게 결부시키는 반면, 엄격히 역사적 예배를 옹호하는 이들은 예배를 어느 한 과거 문화와 지나치게 결부시킨다."\n(고대 국악으로 하나님을 찬양하면 안 될 이유가 없잖아?,,, 🤷‍♂️)`} 
        author="팀 켈러"
      />
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed">
        <li><strong>취향을 정답이라 착각:</strong> 현대 음악이 '감정만 자극한다'고 비판하지만, 사실 그건 본인들이 클래식이나 성가대 음악에 익숙하도록 훈련받은 중산층 문화에 익숙하기 때문일 수 있어. 모두를 100% 만족시키는 음악은 존재하지 않아.</li>
        <li><strong>가사가 깊은 현대 곡도 많음:</strong> &lt;온 땅의 주인&gt;, &lt;은혜 아래 있네&gt;처럼 구속사와 교리를 잘 담아낸 수준 높은 현대 찬양들도 많거든.</li>
      </ul>
    </div>
  </div>
);

const Step4_Balance = () => (
  <div className="space-y-5">
    <h3 className="text-xl font-bold text-gray-900">⚖️ 그럼 둘을 섞어? 아니면 중간이 답일까?</h3>
    
    <p className="text-gray-700 leading-relaxed">
      이렇게 질문할 수도 있어. *"그럼 전통 찬송가랑 힙합, 록, 재즈를 예배에 다 쓰면 되지 않을까?"* 안타깝게도 릭 워렌(Rick Warren) 목사님이 새들백 교회에서 이 실수를 해보셨대.
    </p>

    <Blockquote 
      text={`"우리는 '바하에서 록엔롤까지' 모든 종류의 음악을 한 예배 시간에 다 포함시켰다... 그 결과는? 우리는 아무도 만족시키지 못했고 반대로 모든 사람을 실망시켰던 것이다!"`}
    />

    <p className="text-gray-700 leading-relaxed">
      결론부터 말하면, <strong>어느 쪽이든 영원히 '완벽하게 성경적인' 100점짜리 음악 형식은 없어.</strong> 장로교의 창시자 존 녹스는 스코틀랜드 신앙고백에서 이렇게 말했어.
    </p>

    <Blockquote 
      text={`"우리는 어떠한 정치와 의식도 그것이 모든 시대와 장소를 위하여 제정된 것으로 생각하지 않는다... 그것들이 교회를 교화하기보다는 오히려 미신을 품게 하는 때는 그것을 변경해도 좋으며 또 변경시켜야 한다."`}
    />
  </div>
);

const Step5_Certainties = () => (
  <div className="space-y-5">
    <h3 className="text-xl font-bold text-gray-900">✨ 예배 음악에 대해 우리가 ‘진짜로’ 확신하는 것들</h3>
    
    <p className="text-gray-700 leading-relaxed">
      형식은 변할 수 있지만, 성경이 말하는 <strong>찬양의 본질</strong>은 분명해! 바울은 로마서 11장에서 진지하게 설교를 하던 도중 뜬금없이 즉흥 찬양을 불러. 
    </p>

    <Blockquote 
      text={`33 깊도다 하나님의 지혜와 지식의 풍성함이여, 그의 판단은 헤아리지 못할 것이며 그의 길은 찾지 못할 것이로다 34 누가 주의 마음을 알았느냐 누가 그의 모사가 되었느냐 35 누가 주께 먼저 드려서 갚으심을 받겠느냐 36 이는 만물이 주에게서 나오고 주로 말미암고 주에게로 돌아감이라 그에게 영광이 세세에 있을지어다 아멘`}
    />

    <p className="text-gray-700 leading-relaxed">
      벅차오르는 감정을 도저히 참을 수 없어서 찬양이 ‘터져 나온’거야. 이렇듯 우리는 <strong>성경에서 묘사된 찬양의 모습</strong>을 통해 5가지를 확신할 수 있어. 
    </p>

    <ul className="space-y-4 text-gray-700 leading-relaxed pl-2">
      <li className="flex gap-2">
        <span className="font-bold text-blue-600">•</span>
        <div><strong>찬양이 빠진 진리는 없다!:</strong> 진리는 머리로만 배우는 게 아니라, 기뻐하고 노래해야 할 대상이야.</div>
      </li>
      <li className="flex gap-2">
        <span className="font-bold text-blue-600">•</span>
        <div><strong>진리 없는 찬양도 없다!:</strong> 바울의 즉흥 찬양은 구약 성경(이사야, 욥기)에서 흘러나왔어. 가사가 성경적이어야 해!</div>
      </li>
      <li className="flex gap-2">
        <span className="font-bold text-blue-600">•</span>
        <div className="w-full">
          <strong>할 수 있는 한 가장 '아름답게(Skillful):</strong> 시편 33편 3절은 ‘즐거운 소리로 아름답게 연주할지어다’ 라고 해. 여기서 아름답게는 히브리어 ‘야타브’로, 정교한 연주를 의미하는 단어야. 팀 켈러 목사님은 다음과 같이 말했어.
          <Blockquote 
            text={`"심미적으로 뛰어난 예술은 외부인을 안으로 끌어들인다. 그러나 낮은 수준의 예술이 보장하는 것은 오직 내부자들만 들어올 것이라는 점이다. 좋은 예술은 비신자들이 교회 안으로 들어오는데 중요한 역할을 한다."`}
          />
        </div>
      </li>
      <li className="flex gap-2">
        <span className="font-bold text-blue-600">•</span>
        <div><strong>깊은 감정과 함께!:</strong> 이성으로 감정을 억눌러야 한다는 건 성경적이지 않아. 찬양은 감정을 고양시키고, 그 감정은 진리를 향해야 해. 우린 전인격적인 존재니까!</div>
      </li>
      <li className="flex gap-2">
        <span className="font-bold text-blue-600">•</span>
        <div><strong>모든 민족과 문화를 품는 찬양:</strong> 요한계시록(7:9-10)을 보면 모든 나라와 방언이 하나님을 찬양해. 예수님을 특정 문화(예: 유럽 클래식)에 갇힌 부족신으로 만들면 안 돼. 모든 문화의 찬양을 받으시기 합당하신 분이야.</div>
      </li>
    </ul>
  </div>
);

const Step6_Cross = () => (
  <div className="space-y-5">
    <h3 className="text-xl font-bold text-gray-900">✝️ 탄식에서 찬양으로</h3>
    
    <p className="text-gray-700 leading-relaxed">
      놀라운 사실 하나 알려줄까? 성경을 보면 세상이 처음 창조됐을 때, 우주는 기쁨의 노래와 음악으로 가득했어(욥 38:6-7). 하지만 죄가 들어온 타락 이후, 로마서 8장 22절은 피조물과 우리가 '탄식'하게 되었다고 말해. 음악의 자리를 탄식이 채운 거지.
    </p>
    <p className="text-gray-700 leading-relaxed">
      그런데 히브리서 2장 12절을 보면, 예수님께서 "내가 주를 교회 중에서 찬송하리라"라고 하셔! 탄식으로 가득한 세상에서 어떻게 예수님은 찬양할 수 있으셨을까?
    </p>
    <p className="text-gray-700 leading-relaxed">
      바로 예수님이 십자가와 겟세마네에서 우리 대신 '탄식'하셨기 때문이야. 영원 전부터 하나님의 기쁨과 찬양의 대상이셨던 분이, 십자가에서 철저히 버림받고 신음하셨어. 우리의 죄를 덮고, 훗날 새 하늘과 새 땅에서 우리가 완벽하게 찬양할 수 있도록 말이야!
    </p>
    <p className="text-gray-700 leading-relaxed">
      이 십자가 복음의 은혜가 우리 마음과 예배 가운데 차오를 때, 우리의 입술에 맺힌 탄식은 다시 찬양으로 바뀔 거야. 우리 찬양팀과 예배가 음악적 감동을 넘어, 이런 십자가의 영광을 온전히 드러내길 간절히 소망해!
    </p>
  </div>
);

const Step7_Questions = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const questions = [
    {
      title: "Q1. '음악적 취향'과 '성경적 기준' 구분해보기",
      items: [
        "방금 글에서는 대중성과 위로를 중시하는 ‘현대적 관점’과, 전통성과 교리를 중시하는 ‘역사적 관점’의 한계를 짚어줬어.",
        "나는 솔직히 예배 찬양을 고르거나 부를 때 어디에 더 이끌리는 사람인 것 같아?",
        "혹시 나의 개인적인 '음악적 취향' 때문에 나와 다른 스타일의 찬양을 '틀렸다'거나 '은혜가 안 된다'고 판단해 본 적은 없었을까?"
      ]
    },
    {
      title: "Q2. 감정과 진리, 내가 찬양을 좋아하는 이유는?",
      items: [
        "찬양을 듣거나 부르면서 가장 깊은 감동을 받았던 순간은 언제였어?",
        "가만히 돌아보면 그 감동은 단순한 밴드 사운드나 음악적 분위기(코드 진행, 빌드업 등) 때문이었을까, 아니면 가사에 담긴 '복음의 진리' 때문이었을까?"
      ]
    },
    {
      title: "Q3. '아름답게(Skillful)' 연주한다는 것의 진짜 의미",
      items: [
        "팀 켈러 목사님은 \"심미적으로 뛰어난 예술은 외부인을 예배 안으로 끌어들인다\"고 말하며, 찬양을 할 수 있는 한 아름답고 공교하게 연주해야 한다고 강조했어.",
        "우리 찬양팀이 그저 우리끼리의 '자기만족'이나 '은혜'를 넘어, 회중들을 예배 안으로 깊이 끌어들이는 '좋은 예술'을 하기 위해 지금 당장 적용해 볼 수 있는 작은 변화는 무엇이 있을까? (예: 모니터링 방식, 개인 연습량, 톤 메이킹, 팀 화합 등)"
      ]
    }
  ];

  return (
    <div className="space-y-5 pb-10">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl">📚</span>
        <h2 className="text-xl font-bold text-gray-900">나눔 질문</h2>
      </div>
      <hr className="border-gray-200 my-2 mb-6" />
      
      <div>
        {questions.map((q, idx) => (
          <AccordionItem 
            key={idx} 
            title={q.title} 
            isOpen={openIndex === idx} 
            onClick={() => toggleAccordion(idx)}
          >
            {q.items.map((item, i) => (
              <li key={i} className="mb-2 last:mb-0">{item}</li>
            ))}
          </AccordionItem>
        ))}
      </div>
    </div>
  );
};

// --- Main Application Component ---

function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    <Step0_Title />,
    <Step1_IceBreaking />,
    <Step2_Intro />,
    <Step3_TwoViews />,
    <Step4_Balance />,
    <Step5_Certainties />,
    <Step6_Cross />,
    <Step7_Questions />
  ];

  const totalSteps = steps.length;

  const handleNext = () => {
    if (currentStep < totalSteps - 1) setCurrentStep(prev => prev + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center text-gray-900 font-sans">
      <div className="w-full max-w-md bg-white min-h-screen shadow-2xl flex flex-col relative">
        
        <div className="h-1.5 w-full bg-gray-100 sticky top-0 z-50">
          <div 
            className="h-full bg-blue-600 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <main className="flex-1 px-6 py-8 overflow-x-hidden">
          {steps[currentStep]}
        </main>

        <footer className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 flex justify-between items-center z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
          <button
            onClick={handlePrev}
            disabled={currentStep === 0}
            className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-colors ${
              currentStep === 0 
                ? 'text-gray-300 cursor-not-allowed' 
                : 'text-gray-700 hover:bg-gray-100 active:bg-gray-200'
            }`}
          >
            <IconChevronLeft className="w-5 h-5" />
            이전
          </button>

          {currentStep < totalSteps - 1 ? (
            <button
              onClick={handleNext}
              className="flex items-center gap-1 px-5 py-2 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-sm"
            >
              다음
              <IconChevronRight className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={() => window.alert('수고하셨습니다! 풍성한 나눔 시간 되세요. 🙏')}
              className="flex items-center gap-1 px-5 py-2 rounded-lg font-semibold text-white bg-gray-800 hover:bg-gray-900 transition-colors shadow-sm"
            >
              나눔 완료
            </button>
          )}
        </footer>

      </div>
    </div>
  );
}

export { App };
export default App;
