import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch posts" },
        { status: response.status }
      );
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
  const posts = [
    {
      userId: 1,
      id: 1,
      title: "They are responsible and provide options",
      body: "Because it is supportive\nSupportive responses make things quick and clear\nExplain problems and show the whole structure",
    },
    {
      userId: 1,
      id: 2,
      title: "Who is this?",
      body: "This is about living time\nFollow what’s meaningful with no regrets, show clarity\nEven blame and work are part",
    },
    {
      userId: 1,
      id: 3,
      title: "Work sincerely and is both helpful and serious",
      body: "Respecting things deeply will keep reason’s desire simple.",
    },

    [
      {
        userId: 1,
        id: 4,
        title: "It exists and is clear",
        body: "Always and often revisiting successes and failures\nFocus on what is achievable and responsible\nWhoever manages tasks knows what remains and ensures justice\nWants things to be accomplished well",
      },
      {
        userId: 1,
        id: 5,
        title: "Dislike misunderstandings",
        body: "Reject unnecessary concerns\nFind better solutions instead of relying on old ones\nEverything is possible and can be achieved\nNo one should carry pain for long",
      },
      {
        userId: 1,
        id: 6,
        title: "Why understand deeply and clearly",
        body: "Explore within and find what’s meaningful\nOffer support and understanding to others\nProvide clarity on confusing matters\nAppreciate what is valuable and tackle challenges responsibly",
      },
      {
        userId: 1,
        id: 7,
        title: "Large challenges, but still simple",
        body: "Make things easier for everyone involved\nShow purpose and effort repeatedly\nMake exceptions when necessary\nAim to follow straightforward and achievable solutions",
      },
      {
        userId: 1,
        id: 8,
        title: "Painful matters demand attention",
        body: "Respect difficulties and manage them well\nCarefully handle situations that require attention\nPresent ideas and fix mistakes clearly\nTurn problems into opportunities",
      },
      {
        userId: 1,
        id: 9,
        title: "Laws and responsibilities",
        body: "Respect emotions and laws equally\nAct with purpose\nMake agreements that work for everyone\nEnsure benefits and fairness for all involved",
      },
      {
        userId: 1,
        id: 10,
        title: "Options and challenges to face",
        body: "Make clear rules and avoid overcomplicating things\nBe forgiving when mistakes happen\nLet honesty guide decisions\nTurn errors into learning opportunities",
      },
      {
        userId: 2,
        id: 11,
        title: "And it's true because of praise",
        body: "Careful selection of matters that require attention\nAccusations are handled appropriately\nSupport is given where needed\nComfort and good intentions guide decisions",
      },
      {
        userId: 2,
        id: 12,
        title: "At certain times, hatred exists",
        body: "Sometimes greatness comes from challenges\nRecognizing mistakes and addressing them well\nSimplicity and honesty bring clarity\nDisputes can be managed with understanding",
      },
      {
        userId: 2,
        id: 13,
        title: "Pain in finding joy and often overcoming challenges",
        body: "Encourage honesty and effort\nHandle difficult matters carefully\nEnsure fair and equal treatment\nFocus on building solid foundations",
      },
      {
        userId: 2,
        id: 14,
        title: "Choosing what is valuable",
        body: "Avoid unnecessary conflict\nBe clear about responsibilities\nFocus on meaningful actions\nBring light to complex situations",
      },
      {
        userId: 2,
        id: 15,
        title: "Challenges come with their own time",
        body: "Address issues thoughtfully\nMinimize damage and maximize value\nCelebrate small successes\nMove forward with responsibility",
      },
      {
        userId: 2,
        id: 16,
        title: "Sensitive to criticism but strong in challenges",
        body: "Build resilience in tough times\nFace conflicts with clarity and confidence\nStrive for better outcomes\nBalance sensitivity with strength",
      },
      {
        userId: 2,
        id: 17,
        title: "The value of persistence and solving problems",
        body: "Every problem has a solution\nFocusing on persistence pays off\nRational thinking leads to results\nTackle problems with logical reasoning",
      },
      {
        userId: 2,
        id: 18,
        title: "Find joy in truth and responsibility",
        body: "Good decisions lead to less burden\nFocus on work that brings joy\nAvoid blame and work together\nCreate valuable and meaningful outcomes",
      },
      {
        userId: 2,
        id: 19,
        title: "A brighter way to solve challenges",
        body: "Think creatively to resolve issues\nValue all contributions\nCooperate and bring out the best in everyone\nFocus on making progress",
      },
      {
        userId: 2,
        id: 20,
        title: "Support and responsibility bring success",
        body: "Encourage teamwork and shared goals\nAvoid unnecessary delays\nWork efficiently and effectively\nBuild systems for long-term success",
      },
      {
        userId: 3,
        id: 21,
        title: "Challenges of perfection with minimal resources",
        body: "Strive to improve in difficult situations\nTackle obstacles with determination\nRecognize the effort behind small wins\nAdapt to changing circumstances with resilience",
      },
      {
        userId: 3,
        id: 22,
        title: "The pain of clarity and explanation",
        body: "Accept responsibility and learn from mistakes\nFocus on constructive solutions\nAddress misunderstandings calmly\nSeek clarity in all decisions",
      },
      {
        userId: 3,
        id: 23,
        title: "The struggle for purpose and consistency",
        body: "Align efforts with clear goals\nBalance short-term challenges with long-term benefits\nStay true to values while adapting\nFind meaning in day-to-day activities",
      },
      {
        userId: 3,
        id: 24,
        title: "Hard work leads to lasting results",
        body: "Value diligence and persistence\nRecognize the importance of teamwork\nTake pride in overcoming challenges\nCelebrate milestones along the way",
      },
      {
        userId: 3,
        id: 25,
        title: "Unique contributions bring value",
        body: "Recognize individual strengths\nEncourage creative thinking\nLearn from errors and adapt\nBuild trust through shared experiences",
      },
      {
        userId: 3,
        id: 26,
        title: "Embrace differences to solve problems",
        body: "Understand diverse perspectives\nHandle conflicts with empathy\nStrengthen relationships through collaboration\nUse challenges as opportunities to grow",
      },
      {
        userId: 3,
        id: 27,
        title: "Balancing responsibilities with patience",
        body: "Take calculated risks when necessary\nBe consistent in actions and decisions\nLearn from every experience\nKeep patience as a guiding principle",
      },
      {
        userId: 3,
        id: 28,
        title: "Finding joy in simplicity",
        body: "Appreciate the small moments\nLook beyond the surface for value\nWork towards greater understanding\nTurn ordinary tasks into meaningful actions",
      },
      {
        userId: 3,
        id: 29,
        title: "Owning up to needs and responsibilities",
        body: "Acknowledge personal accountability\nSeek meaningful ways to make amends\nFocus on building trust with others\nLearn from every mistake and grow",
      },
      {
        userId: 3,
        id: 30,
        title: "Maximizing potential through collaboration",
        body: "Encourage shared effort for greater results\nAvoid unnecessary conflicts\nRecognize and celebrate collective success\nStay open to new ideas and opportunities",
      },
      {
        userId: 4,
        id: 31,
        title: "ullam ut quidem id aut vel consequuntur",
        body: "debitis eius sed quibusdam non quis consectetur vitae\nimpedit ut qui consequatur sed aut in\nquidem sit nostrum et maiores adipisci atque\nquaerat voluptatem adipisci repudiandae",
      },
      {
        userId: 4,
        id: 32,
        title: "doloremque illum aliquid sunt",
        body: "deserunt eos nobis asperiores et hic\nest debitis repellat molestiae optio\nnihil ratione ut eos beatae quibusdam distinctio maiores\nearum voluptates et aut adipisci ea maiores voluptas maxime",
      },
      {
        userId: 4,
        id: 33,
        title: "qui explicabo molestiae dolorem",
        body: "rerum ut et numquam laborum odit est sit\nid qui sint in\nquasi tenetur tempore aperiam et quaerat qui in\nrerum officiis sequi cumque quod",
      },
      {
        userId: 4,
        id: 34,
        title: "magnam ut rerum iure",
        body: "ea velit perferendis earum ut voluptatem voluptate itaque iusto\ntotam pariatur in\nnemo voluptatem voluptatem autem magni tempora minima in\nest distinctio qui assumenda accusamus dignissimos officia nesciunt nobis",
      },
      {
        userId: 4,
        id: 35,
        title: "id nihil consequatur molestias animi provident",
        body: "nisi error delectus possimus ut eligendi vitae\nplaceat eos harum cupiditate facilis reprehenderit voluptatem beatae\nmodi ducimus quo illum voluptas eligendi\net nobis quia fugit",
      },
      {
        userId: 4,
        id: 36,
        title: "fuga nam accusamus voluptas reiciendis itaque",
        body: "ad mollitia et omnis minus architecto odit\nvoluptas doloremque maxime aut non ipsa qui alias veniam\nblanditiis culpa aut quia nihil cumque facere et occaecati\nqui aspernatur quia eaque ut aperiam inventore",
      },
      {
        userId: 4,
        id: 37,
        title: "provident vel ut sit ratione est",
        body: "debitis et eaque non officia sed nesciunt pariatur vel\nvoluptatem iste vero et ea\nnumquam aut expedita ipsum nulla in\nvoluptates omnis consequatur aut enim officiis in quam qui",
      },
      {
        userId: 4,
        id: 38,
        title: "explicabo et eos deleniti nostrum ab id repellendus",
        body: "animi esse sit aut sit nesciunt assumenda eum voluptas\nquia voluptatibus provident quia necessitatibus ea\nrerum repudiandae quia voluptatem delectus fugit aut id quia\nratione optio eos iusto veniam iure",
      },
      {
        userId: 4,
        id: 39,
        title: "eos dolorem iste accusantium est eaque quam",
        body: "corporis rerum ducimus vel eum accusantium\nmaxime aspernatur a porro possimus iste omnis\nest in deleniti asperiores fuga aut\nvoluptas sapiente vel dolore minus voluptatem incidunt ex",
      },
      {
        userId: 4,
        id: 40,
        title: "enim quo cumque",
        body: "ut voluptatum aliquid illo tenetur nemo sequi quo facilis\nipsum rem optio mollitia quas\nvoluptatem eum voluptas qui\nunde omnis voluptatem iure quasi maxime voluptas nam",
      },
      {
        userId: 5,
        id: 41,
        title: "non est facere",
        body: "molestias id nostrum\nexcepturi molestiae dolore omnis repellendus quaerat saepe\nconsectetur iste quaerat tenetur asperiores accusamus ex ut\nnam quidem est ducimus sunt debitis saepe",
      },
      {
        userId: 5,
        id: 42,
        title:
          "commodi ullam sint et excepturi error explicabo praesentium voluptas",
        body: "odio fugit voluptatum ducimus earum autem est incidunt voluptatem\nodit reiciendis aliquam sunt sequi nulla dolorem\nnon facere repellendus voluptates quia\nratione harum vitae ut",
      },
      {
        userId: 5,
        id: 43,
        title:
          "eligendi iste nostrum consequuntur adipisci praesentium sit beatae perferendis",
        body: "similique fugit est\nillum et dolorum harum et voluptate eaque quidem\nexercitationem quos nam commodi possimus cum odio nihil nulla\ndolorum exercitationem magnam ex et a et distinctio debitis",
      },
      {
        userId: 5,
        id: 44,
        title: "optio dolor molestias sit",
        body: "temporibus est consectetur dolore\net libero debitis vel velit laboriosam quia\nipsum quibusdam qui itaque fuga rem aut\nea et iure quam sed maxime ut distinctio quae",
      },
      {
        userId: 5,
        id: 45,
        title: "ut numquam possimus omnis eius suscipit laudantium iure",
        body: "est natus reiciendis nihil possimus aut provident\nex et dolor\nrepellat pariatur est\nnobis rerum repellendus dolorem autem",
      },
      {
        userId: 5,
        id: 46,
        title: "aut quo modi neque nostrum ducimus",
        body: "voluptatem quisquam iste\nvoluptatibus natus officiis facilis dolorem\nquis quas ipsam\nvel et voluptatum in aliquid",
      },
      {
        userId: 5,
        id: 47,
        title: "quibusdam cumque rem aut deserunt",
        body: "voluptatem assumenda ut qui ut cupiditate aut impedit veniam\noccaecati nemo illum voluptatem laudantium\nmolestiae beatae rerum ea iure soluta nostrum\neligendi et voluptate",
      },
      {
        userId: 5,
        id: 48,
        title: "ut voluptatem illum ea doloribus itaque eos",
        body: "voluptates quo voluptatem facilis iure occaecati\nvel assumenda rerum officia et\nillum perspiciatis ab deleniti\nlaudantium repellat ad ut et autem reprehenderit",
      },
      {
        userId: 5,
        id: 49,
        title: "laborum non sunt aut ut assumenda perspiciatis voluptas",
        body: "inventore ab sint\nnatus fugit id nulla sequi architecto nihil quaerat\neos tenetur in in eum veritatis non\nquibusdam officiis aspernatur cumque aut commodi aut",
      },
      {
        userId: 5,
        id: 50,
        title:
          "repellendus qui recusandae incidunt voluptates tenetur qui omnis exercitationem",
        body: "error suscipit maxime adipisci consequuntur recusandae\nvoluptas eligendi et est et voluptates\nquia distinctio ab amet quaerat molestiae et vitae\nadipisci impedit sequi nesciunt quis consectetur",
      },
      {
        userId: 6,
        id: 51,
        title: "soluta aliquam aperiam consequatur illo quis voluptas",
        body: "sunt dolores aut doloribus\ndolore doloribus voluptates tempora et\ndoloremque et quo\ncum asperiores sit consectetur dolorem",
      },
      {
        userId: 6,
        id: 52,
        title: "qui enim et consequuntur quia animi quis voluptate quibusdam",
        body: "iusto est quibusdam fuga quas quaerat molestias\na enim ut sit accusamus enim\ntemporibus iusto accusantium provident architecto\nsoluta esse reprehenderit qui laborum",
      },
      {
        userId: 6,
        id: 53,
        title: "ut quo aut ducimus alias",
        body: "minima harum praesentium eum rerum illo dolore\nquasi exercitationem rerum nam\nporro quis neque quo\nconsequatur minus dolor quidem veritatis sunt non explicabo similique",
      },
      {
        userId: 6,
        id: 54,
        title: "sit asperiores ipsam eveniet odio non quia",
        body: "totam corporis dignissimos\nvitae dolorem ut occaecati accusamus\nex velit deserunt\net exercitationem vero incidunt corrupti mollitia",
      },
      {
        userId: 6,
        id: 55,
        title: "sit vel voluptatem et non libero",
        body: "debitis excepturi ea perferendis harum libero optio\neos accusamus cum fuga ut sapiente repudiandae\net ut incidunt omnis molestiae\nnihil ut eum odit",
      },
      {
        userId: 6,
        id: 56,
        title: "qui et at rerum necessitatibus",
        body: "aut est omnis dolores\nneque rerum quod ea rerum velit pariatur beatae excepturi\net provident voluptas corrupti\ncorporis harum reprehenderit dolores eligendi",
      },
      {
        userId: 6,
        id: 57,
        title: "sed ab est est",
        body: "at pariatur consequuntur earum quidem\nquo est laudantium soluta voluptatem\nqui ullam et est\net cum voluptas voluptatum repellat est",
      },
      {
        userId: 6,
        id: 58,
        title: "voluptatum itaque dolores nisi et quasi",
        body: "veniam voluptatum quae adipisci id\net id quia eos ad et dolorem\naliquam quo nisi sunt eos impedit error\nad similique veniam",
      },
      {
        userId: 6,
        id: 59,
        title: "qui commodi dolor at maiores et quis id accusantium",
        body: "perspiciatis et quam ea autem temporibus non voluptatibus qui\nbeatae a earum officia nesciunt dolores suscipit voluptas et\nanimi doloribus cum rerum quas et magni\net hic ut ut commodi expedita sunt",
      },
      {
        userId: 6,
        id: 60,
        title:
          "consequatur placeat omnis quisquam quia reprehenderit fugit veritatis facere",
        body: "asperiores sunt ab assumenda cumque modi velit\nqui esse omnis\nvoluptate et fuga perferendis voluptas\nillo ratione amet aut et omnis",
      },
      {
        userId: 7,
        id: 61,
        title: "voluptatem doloribus consectetur est ut ducimus",
        body: "ab nemo optio odio\ndelectus tenetur corporis similique nobis repellendus rerum omnis facilis\nvero blanditiis debitis in nesciunt doloribus dicta dolores\nmagnam minus velit",
      },
      {
        userId: 7,
        id: 62,
        title: "beatae enim quia vel",
        body: "enim aspernatur illo distinctio quae praesentium\nbeatae alias amet delectus qui voluptate distinctio\nodit sint accusantium autem omnis\nquo molestiae omnis ea eveniet optio",
      },
      {
        userId: 7,
        id: 63,
        title:
          "voluptas blanditiis repellendus animi ducimus error sapiente et suscipit",
        body: "enim adipisci aspernatur nemo\nnumquam omnis facere dolorem dolor ex quis temporibus incidunt\nab delectus culpa quo reprehenderit blanditiis asperiores\naccusantium ut quam in voluptatibus voluptas ipsam dicta",
      },
      {
        userId: 7,
        id: 64,
        title: "et fugit quas eum in in aperiam quod",
        body: "id velit blanditiis\neum ea voluptatem\nmolestiae sint occaecati est eos perspiciatis\nincidunt a error provident eaque aut aut qui",
      },
      {
        userId: 7,
        id: 65,
        title: "consequatur id enim sunt et et",
        body: "voluptatibus ex esse\nsint explicabo est aliquid cumque adipisci fuga repellat labore\nmolestiae corrupti ex saepe at asperiores et perferendis\nnatus id esse incidunt pariatur",
      },
      {
        userId: 7,
        id: 66,
        title: "repudiandae ea animi iusto",
        body: "officia veritatis tenetur vero qui itaque\nsint non ratione\nsed et ut asperiores iusto eos molestiae nostrum\nveritatis quibusdam et nemo iusto saepe",
      },
      {
        userId: 7,
        id: 67,
        title: "aliquid eos sed fuga est maxime repellendus",
        body: "reprehenderit id nostrum\nvoluptas doloremque pariatur sint et accusantium quia quod aspernatur\net fugiat amet\nnon sapiente et consequatur necessitatibus molestiae",
      },
      {
        userId: 7,
        id: 68,
        title: "odio quis facere architecto reiciendis optio",
        body: "magnam molestiae perferendis quisquam\nqui cum reiciendis\nquaerat animi amet hic inventore\nea quia deleniti quidem saepe porro velit",
      },
      {
        userId: 7,
        id: 69,
        title: "fugiat quod pariatur odit minima",
        body: "officiis error culpa consequatur modi asperiores et\ndolorum assumenda voluptas et vel qui aut vel rerum\nvoluptatum quisquam perspiciatis quia rerum consequatur totam quas\nsequi commodi repudiandae asperiores et saepe a",
      },
      {
        userId: 7,
        id: 70,
        title: "voluptatem laborum magni",
        body: "sunt repellendus quae\nest asperiores aut deleniti esse accusamus repellendus quia aut\nquia dolorem unde\neum tempora esse dolore",
      },
      {
        userId: 8,
        id: 71,
        title: "et iusto veniam et illum aut fuga",
        body: "occaecati a doloribus\niste saepe consectetur placeat eum voluptate dolorem et\nqui quo quia voluptas\nrerum ut id enim velit est perferendis",
      },
      {
        userId: 8,
        id: 72,
        title: "sint hic doloribus consequatur eos non id",
        body: "quam occaecati qui deleniti consectetur\nconsequatur aut facere quas exercitationem aliquam hic voluptas\nneque id sunt ut aut accusamus\nsunt consectetur expedita inventore velit",
      },
      {
        userId: 8,
        id: 73,
        title: "consequuntur deleniti eos quia temporibus ab aliquid at",
        body: "voluptatem cumque tenetur consequatur expedita ipsum nemo quia explicabo\naut eum minima consequatur\ntempore cumque quae est et\net in consequuntur voluptatem voluptates aut",
      },
      {
        userId: 8,
        id: 74,
        title: "enim unde ratione doloribus quas enim ut sit sapiente",
        body: "odit qui et et necessitatibus sint veniam\nmollitia amet doloremque molestiae commodi similique magnam et quam\nblanditiis est itaque\nquo et tenetur ratione occaecati molestiae tempora",
      },
      {
        userId: 8,
        id: 75,
        title: "dignissimos eum dolor ut enim et delectus in",
        body: "commodi non non omnis et voluptas sit\nautem aut nobis magnam et sapiente voluptatem\net laborum repellat qui delectus facilis temporibus\nrerum amet et nemo voluptate expedita adipisci error dolorem",
      },
      {
        userId: 8,
        id: 76,
        title: "doloremque officiis ad et non perferendis",
        body: "ut animi facere\ntotam iusto tempore\nmolestiae eum aut et dolorem aperiam\nquaerat recusandae totam odio",
      },
      {
        userId: 8,
        id: 77,
        title: "necessitatibus quasi exercitationem odio",
        body: "modi ut in nulla repudiandae dolorum nostrum eos\naut consequatur omnis\nut incidunt est omnis iste et quam\nvoluptates sapiente aliquam asperiores nobis amet corrupti repudiandae provident",
      },
      {
        userId: 8,
        id: 78,
        title: "quam voluptatibus rerum veritatis",
        body: "nobis facilis odit tempore cupiditate quia\nassumenda doloribus rerum qui ea\nillum et qui totam\naut veniam repellendus",
      },
      {
        userId: 8,
        id: 79,
        title: "pariatur consequatur quia magnam autem omnis non amet",
        body: "libero accusantium et et facere incidunt sit dolorem\nnon excepturi qui quia sed laudantium\nquisquam molestiae ducimus est\nofficiis esse molestiae iste et quos",
      },
      {
        userId: 8,
        id: 80,
        title: "labore in ex et explicabo corporis aut quas",
        body: "ex quod dolorem ea eum iure qui provident amet\nquia qui facere excepturi et repudiandae\nasperiores molestias provident\nminus incidunt vero fugit rerum sint sunt excepturi provident",
      },
      {
        userId: 9,
        id: 81,
        title: "tempora rem veritatis voluptas quo dolores vero",
        body: "facere qui nesciunt est voluptatum voluptatem nisi\nsequi eligendi necessitatibus ea at rerum itaque\nharum non ratione velit laboriosam quis consequuntur\nex officiis minima doloremque voluptas ut aut",
      },
      {
        userId: 9,
        id: 82,
        title: "laudantium voluptate suscipit sunt enim enim",
        body: "ut libero sit aut totam inventore sunt\nporro sint qui sunt molestiae\nconsequatur cupiditate qui iste ducimus adipisci\ndolor enim assumenda soluta laboriosam amet iste delectus hic",
      },
      {
        userId: 9,
        id: 83,
        title: "odit et voluptates doloribus alias odio et",
        body: "est molestiae facilis quis tempora numquam nihil qui\nvoluptate sapiente consequatur est qui\nnecessitatibus autem aut ipsa aperiam modi dolore numquam\nreprehenderit eius rem quibusdam",
      },
      {
        userId: 9,
        id: 84,
        title:
          "optio ipsam molestias necessitatibus occaecati facilis veritatis dolores aut",
        body: "sint molestiae magni a et quos\neaque et quasi\nut rerum debitis similique veniam\nrecusandae dignissimos dolor incidunt consequatur odio",
      },
      {
        userId: 9,
        id: 85,
        title: "dolore veritatis porro provident adipisci blanditiis et sunt",
        body: "similique sed nisi voluptas iusto omnis\nmollitia et quo\nassumenda suscipit officia magnam sint sed tempora\nenim provident pariatur praesentium atque animi amet ratione",
      },
      {
        userId: 9,
        id: 86,
        title: "placeat quia et porro iste",
        body: "quasi excepturi consequatur iste autem temporibus sed molestiae beatae\net quaerat et esse ut\nvoluptatem occaecati et vel explicabo autem\nasperiores pariatur deserunt optio",
      },
      {
        userId: 9,
        id: 87,
        title: "nostrum quis quasi placeat",
        body: "eos et molestiae\nnesciunt ut a\ndolores perspiciatis repellendus repellat aliquid\nmagnam sint rem ipsum est",
      },
      {
        userId: 9,
        id: 88,
        title: "sapiente omnis fugit eos",
        body: "consequatur omnis est praesentium\nducimus non iste\nneque hic deserunt\nvoluptatibus veniam cum et rerum sed",
      },
      {
        userId: 9,
        id: 89,
        title: "sint soluta et vel magnam aut ut sed qui",
        body: "repellat aut aperiam totam temporibus autem et\narchitecto magnam ut\nconsequatur qui cupiditate rerum quia soluta dignissimos nihil iure\ntempore quas est",
      },
      {
        userId: 9,
        id: 90,
        title: "ad iusto omnis odit dolor voluptatibus",
        body: "minus omnis soluta quia\nqui sed adipisci voluptates illum ipsam voluptatem\neligendi officia ut in\neos soluta similique molestias praesentium blanditiis",
      },
      {
        userId: 10,
        id: 91,
        title: "aut amet sed",
        body: "libero voluptate eveniet aperiam sed\nsunt placeat suscipit molestias\nsimilique fugit nam natus\nexpedita consequatur consequatur dolores quia eos et placeat",
      },
      {
        userId: 10,
        id: 92,
        title: "ratione ex tenetur perferendis",
        body: "aut et excepturi dicta laudantium sint rerum nihil\nlaudantium et at\na neque minima officia et similique libero et\ncommodi voluptate qui",
      },
      {
        userId: 10,
        id: 93,
        title: "beatae soluta recusandae",
        body: "dolorem quibusdam ducimus consequuntur dicta aut quo laboriosam\nvoluptatem quis enim recusandae ut sed sunt\nnostrum est odit totam\nsit error sed sunt eveniet provident qui nulla",
      },
      {
        userId: 10,
        id: 94,
        title: "qui qui voluptates illo iste minima",
        body: "aspernatur expedita soluta quo ab ut similique\nexpedita dolores amet\nsed temporibus distinctio magnam saepe deleniti\nomnis facilis nam ipsum natus sint similique omnis",
      },
      {
        userId: 10,
        id: 95,
        title: "id minus libero illum nam ad officiis",
        body: "earum voluptatem facere provident blanditiis velit laboriosam\npariatur accusamus odio saepe\ncumque dolor qui a dicta ab doloribus consequatur omnis\ncorporis cupiditate eaque assumenda ad nesciunt",
      },
      {
        userId: 10,
        id: 96,
        title: "quaerat velit veniam amet cupiditate aut numquam ut sequi",
        body: "in non odio excepturi sint eum\nlabore voluptates vitae quia qui et\ninventore itaque rerum\nveniam non exercitationem delectus aut",
      },
      {
        userId: 10,
        id: 97,
        title: "quas fugiat ut perspiciatis vero provident",
        body: "eum non blanditiis soluta porro quibusdam voluptas\nvel voluptatem qui placeat dolores qui velit aut\nvel inventore aut cumque culpa explicabo aliquid at\nperspiciatis est et voluptatem dignissimos dolor itaque sit nam",
      },
      {
        userId: 10,
        id: 98,
        title: "laboriosam dolor voluptates",
        body: "doloremque ex facilis sit sint culpa\nsoluta assumenda eligendi non ut eius\nsequi ducimus vel quasi\nveritatis est dolores",
      },
      {
        userId: 10,
        id: 99,
        title: "temporibus sit alias delectus eligendi possimus magni",
        body: "quo deleniti praesentium dicta non quod\naut est molestias\nmolestias et officia quis nihil\nitaque dolorem quia",
      },
      {
        userId: 10,
        id: 100,
        title: "at nam consequatur ea labore ea harum",
        body: "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut",
      },
    ],
  ];

  return NextResponse.json(posts);
}
