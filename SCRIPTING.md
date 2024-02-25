# Scripting System

## Dialogue
There are two Stage Scripts:  
* Opening
* Ending

The stage scripts are available at following location:
* Opening  
  * Japanese: `data/stageopevent_{stageId}/StageOPEvent_{stageId}`
  * Others: `data/{locale}/stageopevent_{stageId}_{locale}/StageOPEvent_{stageId}_{locale}`
* Ending 
  * Japanese: `data/stageedevent_{stageId}/StageEDEvent_{stageId}`
  * Others: `data/{locale}/stageedevent_{stageId}_{locale}/StageEDEvent_{stageId}_{locale}`

For example, Tutorial opening script for Korean is available as following: `data/stageedevent_0_kr/StageOPEvent_0_kr`

> [!NOTE]  
> The locale code differs from `ISO639 Standard` in case of Korean. Here are the references:  
> * English: `en`
> * **Korean: `kr`** (Note that it isn't `ko`)
> * Chinese: `zh`

### Script Syntax
The script follows basic CSV (Comma Seperated Values) format. Here is the example for Japanese script for tutorial opening:  
```csv
所在,18,-1
さとり,18,ふぅ…@nどうにも調子が良くないわ。
さとり,3,ここのところ働き通しだったし…@n体が疲れてるのかしら。
さとり,7,…能力もうまく機能しないわね。@nペットたちの心の声が聞こえてこないわ。
...
```  

Quick look at the syntax can infer the following:  

First line: Location declaration (Further inspection required)
Second and later:  
`CharacterName,SpriteId,EscapedString`

* `CharacterName`: Write the character name in Japanese. In this example, The text is about Satori speaking.
* `SpriteId`: Each character has several Character Sprites available at `image/{character}_{spriteId}`. The second line loads `image/satori_18`, which is "sick" satori.  
* `EscapedString`: Write Special Characters that are used for csv syntax. Here are the characters.
  - `@*`: Writes `,`
  - `@n`: Equivalent of `\n` (Line feed)

## Tutorial Dialogue
The tutorial dialogue scripts are available at following location:
* Japanese: `data/tutorialdata_{stageId}_{dialogId}/tutorialData_{stageId}_{dialogId}`
* Others: `data/{locale}/tutorialdata_{stageId}_{dialogId}_{locale}/tutorialData_{stageId}_{dialogId}_{locale}`

### Script Syntax
Example:  
```csv
0,それじゃ、軽く練習してみましょう。
1,まずは何かを当てるために@nお空に質問しないといけないわね…
```

It is parsed as following:  
`SpriteId,EscapedString`

The contents are same as the `dialogue`.  


## Quiz Phase
Example:  
```csv
//設問,//さとりセリフ,ぷりん,けーき
それはやわらかい？,その食べ物は柔らかいのかしら？,はい,中間
それは青い？,それは青いのかしら？,いいえ,いいえ
```

First line: `//設問,//さとりセリフ,answer1,answer2/answer2alt,answer3`  
The first two columns are used to indicate later column's questions.   
Second-or-later lines: `short question,long question (question used for third eye),{response1},{response2},{response3}`

The response can be one of the following:  
* `はい`: `true` (Internal ENUM: `YES`)
* `いいえ`: `false` (Internal ENUM: `NO`)
* `中間`:`between true/false` (Internal ENUM: `EVEN`)
* `ややはい`: `probably true` (Internal ENUM: `LYES`)
* `ややいいえ`: `probably false` (Internal ENUM: `LNO`)
* `わからない`: `don't know` (Internal ENUM: `DONT`)
* `不明`: `not sure` (Internal ENUM: `CANT`)
* `物による`: `it depends` (Internal ENUM: `VARIABLE`)

