
// Translations for UI elements
const translations = {
    ja: {
        title: "ステージデータエディタ",
        uploadBtn: "CSVをアップロード",
        downloadBtn: "全ステージをダウンロード",
        fallbackTitle: "フォールバックチェーン:",
        fallbackDesc: "空のフィールドは自動的にチェーンの前の言語のコンテンツを使用します",
        tutorial: "チュートリアル",
        stage: "ステージ",
        timeLimit: "制限時間（秒）",
        penalty: "ペナルティ",
        minMistakes: "誤答最低数",
        mistakeRange: "誤答幅",
        minForgotten: "忘却最低数",
        forgottenRange: "忘却幅",
        orinMin: "お燐最低保証",
        koishiMin: "こいし最低保証",
        saveBtn: "ステージデータを保存",
        jaTitle: "ステージタイトル",
        enTitle: "英語タイトル",
        zhTitle: "中国語タイトル",
        krTitle: "韓国語タイトル",
        jaTarget: "日本語ターゲット",
        enTarget: "英語ターゲット",
        zhTarget: "中国語ターゲット",
        krTarget: "韓国語ターゲット",
        fallbackInfo: {
            en: "フォールバック: 日本語",
            zh: "フォールバック: 英語",
            kr: "フォールバック: 中国語"
        },
        dontForgetToSaveTitle: "変更を保存するのを忘れないでください！",
        dontForgetToSaveDesc: "ダウンロードボタンを押す前に、フォームの下の変更を保存してください。",
    },
    en: {
        title: "Stage Data Editor",
        uploadBtn: "Upload CSV",
        downloadBtn: "Download All Stages",
        fallbackTitle: "Fallback Chain:",
        fallbackDesc: "Empty fields will automatically use content from the previous language in the chain",
        tutorial: "Tutorial",
        stage: "Stage",
        timeLimit: "Time Limit (sec)",
        penalty: "Penalty",
        minMistakes: "Min. Mistakes",
        mistakeRange: "Mistake Range",
        minForgotten: "Min. Forgotten",
        forgottenRange: "Forgotten Range",
        orinMin: "Orin Min. Guarantee",
        koishiMin: "Koishi Min. Guarantee",
        saveBtn: "Save Stage Data",
        jaTitle: "Stage Title (Japanese)",
        enTitle: "English Title",
        zhTitle: "Chinese Title",
        krTitle: "Korean Title",
        jaTarget: "Japanese Target",
        enTarget: "English Target",
        zhTarget: "Chinese Target",
        krTarget: "Korean Target",
        fallbackInfo: {
            en: "Fallback: Japanese",
            zh: "Fallback: English",
            kr: "Fallback: Chinese"
        },
        dontForgetToSaveTitle: "Don't forget to save your changes!",
        dontForgetToSaveDesc: "Make sure to save your changes by pressing the button below the form before you press the download button.",
    },
    zh: {
        title: "关卡数据编辑器",
        uploadBtn: "上传CSV",
        downloadBtn: "下载所有关卡",
        fallbackTitle: "回退链:",
        fallbackDesc: "空字段将自动使用链中前一种语言的内容",
        tutorial: "教程",
        stage: "关卡",
        timeLimit: "时间限制（秒）",
        penalty: "惩罚",
        minMistakes: "最小错误数",
        mistakeRange: "错误范围",
        minForgotten: "最小遗忘数",
        forgottenRange: "遗忘范围",
        orinMin: "阿燐最低保证",
        koishiMin: "恋石最低保证",
        saveBtn: "保存关卡数据",
        jaTitle: "关卡标题（日语）",
        enTitle: "英语标题",
        zhTitle: "中文标题",
        krTitle: "韩语标题",
        jaTarget: "日语目标词",
        enTarget: "英语目标词",
        zhTarget: "中文目标词",
        krTarget: "韩语目标词",
        fallbackInfo: {
            en: "回退: 日语",
            zh: "回退: 英语",
            kr: "回退: 中文"
        },
        dontForgetToSaveTitle: "别忘了保存你的更改！",
        dontForgetToSaveDesc: "在按下下载按钮之前，请确保在表单下方按下保存按钮以保存更改。",
    },
    ko: {
        title: "스테이지 데이터 에디터",
        uploadBtn: "CSV 업로드",
        downloadBtn: "모든 스테이지 다운로드",
        fallbackTitle: "폴백 체인:",
        fallbackDesc: "빈 필드는 자동으로 체인의 이전 언어 콘텐츠를 사용합니다",
        tutorial: "튜토리얼",
        stage: "스테이지",
        timeLimit: "제한 시간(초)",
        penalty: "페널티",
        minMistakes: "최소 오답 수",
        mistakeRange: "오답 범위",
        minForgotten: "최소 망각 수",
        forgottenRange: "망각 범위",
        orinMin: "오린 최소 보장",
        koishiMin: "코이시 최소 보장",
        saveBtn: "스테이지 데이터 저장",
        jaTitle: "스테이지 제목(일본어)",
        enTitle: "영어 제목",
        zhTitle: "중국어 제목",
        krTitle: "한국어 제목",
        jaTarget: "일본어 목표어",
        enTarget: "영어 목표어",
        zhTarget: "중국어 목표어",
        krTarget: "한국어 목표어",
        fallbackInfo: {
            en: "폴백: 일본어",
            zh: "폴백: 영어",
            kr: "폴백: 중국어"
        },
        dontForgetToSaveTitle: "변경 사항을 저장하는 것을 잊지 마세요!",
        dontForgetToSaveDesc: "다운로드 버튼을 누르기 전에 아래 양식 아래의 저장 버튼을 눌러 변경 사항을 저장하세요.",
    }
};

// Get user's language
const userLang = navigator.language.split('-')[0];
const currentLang = translations[userLang] ? userLang : 'ja';
const t = translations[currentLang];

window.addEventListener('DOMContentLoaded', () => {
    document.body.parentElement.setAttribute('lang', currentLang);
});
