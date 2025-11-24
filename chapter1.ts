import { ChapterSection, ContentType } from './types';

export const chapter1Sections: ChapterSection[] = [
  {
    id: "interview",
    title: "1.1 面试受挫",
    content: [
      {
        type: ContentType.NARRATIVE,
        text: "两年前，小菜正在读软件工程专业本科四年级，成绩一般，考研刚结束，即将毕业。\n大学学了不少软件开发方面的东西，也学着编了些小程序，踌躇满志，一心要找一个好单位。\n当投递了无数份简历后，终于收到了一个单位的面试通知，小菜欣喜若狂。"
      },
      {
        type: ContentType.NARRATIVE,
        text: "到了人家单位，前台小姑娘在电脑上给他出了一份题目，上面写着："
      },
      {
        type: ContentType.QUOTE,
        text: "请用C++、Java、C#或VB.NET任意一种面向对象语言实现一个计算器控制台程序，要求输入两个数和运算符号，得到结果。"
      },
      {
        type: ContentType.NARRATIVE,
        text: "小菜一看，这个还不简单，三下五除二，10分钟不到，小菜写完了，感觉也没错误。交卷后，单位说一周内等通知吧。\n于是小菜只得耐心等待。可是半个多月过去了，什么消息也没有，小菜很纳闷，我的代码实现了呀，为什么不给我机会呢？"
      },
      {
        type: ContentType.NARRATIVE,
        text: "时间：2月26日20点  |  地点：大鸟房间  |  人物：小菜、大鸟"
      },
      {
        type: ContentType.IMAGE,
        imageUrl: "https://fdy-pic-1301838659.cos.ap-guangzhou.myqcloud.com/img/image-20251124184444593.png",
        caption: "小菜和大鸟在房间里交谈"
      },
      {
        type: ContentType.NARRATIVE,
        text: "小菜找到从事软件开发工作七年的表哥大鸟，请教原因。\n大鸟，原名李大辽，29岁，小菜的表哥，云南昆明人，毕业后长期从事软件开发和管理工作，近期到上海发展，暂借住小菜家在宝山的空套房里。\n小菜以向大鸟学习为由，也从市区父母家搬到了宝山与大鸟同住。"
      },
      {
        type: ContentType.NARRATIVE,
        text: "大鸟问了题目和了解了小菜代码的细节以后，哈哈大笑。"
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "小菜呀小菜，你上当了，**人家单位出题的意思，你完全都没明白**，当然不会再联系你了。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "我的代码有错吗？单位题目不就是要我实现一个计算器的代码吗？我这样写有什么问题？"
        }
      },
      {
        type: ContentType.CODE,
        language: "java",
        code: `import java.util.Scanner;

public class Test {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        // 获取输入 A
        System.out.print("请输入数字A：");
        String a = sc.nextLine();
        
        // 获取运算符
        System.out.print("请选择运算符号(+、-、*、/)：");
        String s = sc.nextLine();
        
        // 获取输入 B
        System.out.print("请输入数字B：");
        String b = sc.nextLine();
        
        double D = 0d;

        // 根据运算符进行计算
        if (s.equals("+")) {
            D = Double.parseDouble(a) + Double.parseDouble(b);
        }
        if (s.equals("-")) {
            D = Double.parseDouble(a) - Double.parseDouble(b);
        }
        if (s.equals("*")) {
            D = Double.parseDouble(a) * Double.parseDouble(b);
        }
        if (s.equals("/")) {
            D = Double.parseDouble(a) / Double.parseDouble(b);
        }
        
        System.out.print("结果是：" + D);
    }
}`
      }
    ]
  },
  {
    id: "beginner-mistakes",
    title: "1.2 初学者代码毛病",
    content: [
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "且先不说出题人的意思，单就你现在的代码，就有很多不足的地方需要改进。"
        }
      },
      {
        type: ContentType.IMAGE,
        imageUrl: "https://fdy-pic-1301838659.cos.ap-guangzhou.myqcloud.com/img/image-20251124184527888.png",
        caption: "代码中存在的问题"
      },
      {
        type: ContentType.QUOTE,
        text: "(1) **变量命名不规范**，a,b,s,D这些，有什么意义吗，为什么不写成numberA, numberB, operator, result呢？或者更有意义的词？别人看你的代码，如何能明白你这程序在干什么？——这是**代码规范**问题。\n\n(2) 判断可能是**除数为0**的情况，没有做任何判断，这在C#或Java中，会抛出异常，程序就终止了。\n\n(3) 大量的Double.parseDouble()代码**重复**。"
      }
    ]
  },
  {
    id: "code-standards",
    title: "1.3 代码规范",
    content: [
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "哦，说得没错，这个我以前听老师说过，可是从来没有在意过，我马上改，改完再给你看看。"
        }
      },
      {
        type: ContentType.CODE,
        language: "java",
        code: `try {
    Scanner sc = new Scanner(System.in);
    System.out.print("请输入数字A：");
    double numberA = Double.parseDouble(sc.nextLine());
    
    System.out.print("请选择运算符号(+、-、*、/)：");
    String strOperate = sc.nextLine();
    
    System.out.print("请输入数字B：");
    double numberB = Double.parseDouble(sc.nextLine());
    
    double result = 0d;
    
    // 使用 Switch 分支结构，代码更清晰
    switch (strOperate) {
        case "+":
            result = numberA + numberB;
            break;
        case "-":
            result = numberA - numberB;
            break;
        case "*":
            result = numberA * numberB;
            break;
        case "/":
            // 注意：这里仍然没有处理除数为0的情况
            result = numberA / numberB;
            break;
    }
    System.out.println("结果是：" + result);
} catch (Exception e) {
    // 简单的异常处理
    System.out.println("您的输入有错：" + e.toString());
}`
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "嗯，不错，不错，改得很快嘛？至少就目前代码来说，实现计算器是没有问题了，但这样写出的代码是否符合出题人的意思呢？"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "你的意思是**面向对象**？"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "哈，小菜非小菜也！"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "说起来也挺好笑的。我第一次听说面向对象，会以为是……是把脸朝向女朋友，表达……表达一种爱慕的意思。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "晕倒！"
        }
      }
    ]
  },
  {
    id: "oop-intro",
    title: "1.4 面向对象编程",
    content: [
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "我明白你的意思了。他说用任意一种面向对象语言实现，那意思就是要用**面向对象的编程方法**去实现，对吗？OK，这个我学过，只不过当时我没想到而已。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "所有编程初学者都会有这样的问题，就是碰到问题就直觉地用计算机能够理解的逻辑来描述和表达待解决的问题及具体的求解过程。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "这其实是用计算机的方式去思考，比如计算器这个程序，先要求输入两个数和运算符号，然后根据运算符号判断选择如何运算，得到结果，这本身没有错。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "但这样的思维却使得我们的程序只为满足实现当前的需求，**不容易维护，不容易扩展，更不容易复用**，从而达不到高质量代码的要求。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "鸟哥哥，我有点糊涂了，如何才能**容易维护，容易扩展，又容易复用**呢？能不能具体点？"
        }
      }
    ]
  },
  {
    id: "story-printing",
    title: "1.5 活字印刷，面向对象",
    content: [
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "这样吧，我给你讲个故事。你就明白了。"
        }
      },
      {
        type: ContentType.STORY_CARD,
        title: "三国·活字印刷术",
        text: "话说三国时期，曹操带领百万大军攻打东吴，大军在长江赤壁驻扎，军船连成一片，眼看就要灭掉东吴，统一天下，曹操大悦，于是大宴众文武，在酒席间，曹操诗性大发，不觉吟道：‘喝酒唱歌，人生真爽。……’。众文武齐呼：‘丞相好诗！’于是一臣子速命印刷工匠刻版印刷，以便流传天下。\n\n样张出来给曹操一看，曹操感觉不妥，说道：‘喝与唱，此话过俗，应改为‘对酒当歌’较好！’，于是此臣就命工匠重新来过。工匠眼看连夜刻版之工，彻底白费，心中叫苦不迭。只得照办。\n\n（第一次修改：喝酒唱歌 -> 对酒当歌。工匠只能重刻）\n\n样张再次出来请曹操换过目，曹操细细一品，觉得还是不好，说：‘人生真爽太过直接，应改问话才够意境，因此应改为‘对酒当歌，人生几何？……’当大臣转告工匠之时，工匠晕倒……\n\n（第二次修改：人生真爽 -> 人生几何。工匠再次重刻）"
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "小菜你说，这里面的问题出在哪里？"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "是不是因为三国时期活字印刷还未发明，所以要改字的时候，就必须要整个刻板全部重新刻。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "说得好！如果有了活字印刷，则**只需更改四个字就可**，其余工作都未白做。岂不妙哉。"
        }
      },
      {
        type: ContentType.IMAGE,
        imageUrl: "https://fdy-pic-1301838659.cos.ap-guangzhou.myqcloud.com/img/image-20251124184632908.png",
        caption: "活字印刷的灵活性"
      },
      {
        type: ContentType.NARRATIVE,
        text: "第一，要更改，只需更改要改之字，此为**可维护**；\n第二，这些字并非用完这次就无用，完全可以在后来的印刷中重复使用，此乃**可复用**；"
      },
      {
        type: ContentType.NARRATIVE,
        text: "第三，此诗若要加字，只需另刻字加入即可，这是**可扩展**；\n第四，字的排列其实可能是竖排可能是横排，此时只需将活字移动就可做到满足排列需求，此是**灵活性**好。"
      },
      {
        type: ContentType.IMAGE,
        imageUrl: "https://fdy-pic-1301838659.cos.ap-guangzhou.myqcloud.com/img/image-20251124184652592.png",
        caption: "优秀程序的四大特性"
      },
      {
        type: ContentType.NARRATIVE,
        text: "而在活字印刷术出现之前，上面的四种特性都无法满足，要修改，必须重刻，要加字，必须重刻，要重新排列，必须重刻，印完这本书记，此版已无任何可再利用价值。"
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "是的小时候，我一直奇怪，为何火药、指南针、造纸术都是从无到有，从未见到发现的伟大发明，而活字印刷仅仅是从刻版印刷到活字印刷的一次技术上的进步，为何不是评印刷术为四大发明之一呢？原来活字印刷的成功是这个原因。"
        }
      }
    ]
  },
  {
    id: "oop-benefits",
    title: "1.6 面向对象的好处",
    content: [
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "哈，这下你明白了吧？我以前也不懂，不过做了软件开发几年后，经历 了太多的类似曹操这样的客户要改变需求，更改最初想法的事件，才逐渐明白当中的道理。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "其实客观地说，客户的需求也并不过分，不就是改几个字吗，但面对已完成的程序代码，却是需要几乎重头来过，这实在是令人痛苦不堪。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "说白了，原因就是我们原先所写的程序，**不容易维护，灵活性差，不容易扩展，更谈不上复用**，因此面对需求变化，加班加点，对程序员动大手术的无奈也就成了非常正常的事了。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "之后当我学习了面向对象的分析设计编程思想，开始考虑通过**封装、继承、多态**把程序的**耦合度降低**，传统印刷术的问题就在于所有的字都刻在同一版面上造成耦合度太高所致，开始用设计模式使得程序更加灵活，容易修改，并且易于复用。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "体会到面向对象带来的好处，那种感觉应该就如同是中国酒鬼第一次喝到了茅台，西洋酒鬼第一次喝到了XO一样，怎一个爽字可形容呀！"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "是呀是呀，你说得没错，中国古代的四大发明，另三种应该都是科技的进步，伟大的创造或发现。而唯有活字印刷，实在在是思想的成功，**面向对象的胜利**。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "你的意思是，面试公司出题的目的是要我写出**容易维护，容易扩展，又容易复用**的计算器程序？那该如何做呀？"
        }
      }
    ]
  },
  {
    id: "reuse",
    title: "1.7 复制 vs. 复用",
    content: [
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "比如说，我现在要求你再写一个Windows的计算器，你现在的代码能不能复用呢？"
        }
      },
      {
        type: ContentType.IMAGE,
        imageUrl: "https://fdy-pic-1301838659.cos.ap-guangzhou.myqcloud.com/img/image-20251124184716544.png",
        caption: "Windows 计算器"
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "那还不简单，把代码复制过去不就行了吗？改动又不大，不算麻烦。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "小菜看来还是小菜呀，有人说初级程序员的工作就是Ctrl+C和Ctrl+V，这其实是非常不好的编码习惯，因为当你的代码中重复的代码多到一定程度，维护的时候，可能就是一场灾难。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "越大的系统，这种方式带来的问题越严重，编程有一原则，就是尽可能地去**避免重复**。想想看，你写的这段代码，有哪些是和控制台无关的，而只是和计算器有关的？"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "你的意思是分一个类出来？哦，对的，**让计算和显示分开**。"
        }
      }
    ]
  },
  {
    id: "encapsulation",
    title: "1.8 业务的封装",
    content: [
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "准确地说，就是让**业务逻辑与界面逻辑分开**，让它们之间的**耦合度下降**。只有分离开，才可以达到容易维护或扩展。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "让我来试试看。"
        }
      },
      {
        type: ContentType.NARRATIVE,
        text: "Operation运算类："
      },
      {
        type: ContentType.CODE,
        language: "java",
        code: `public class Operation {
    // 将计算逻辑提取到一个单独的方法中
    public static double getResult(double numberA, double numberB, String operate) {
        double result = 0d;
        switch (operate) {
            case "+":
                result = numberA + numberB;
                break;
            case "-":
                result = numberA - numberB;
                break;
            case "*":
                result = numberA * numberB;
                break;
            case "/":
                result = numberA / numberB;
                break;
        }
        return result;
    }
}`
      },
      {
        type: ContentType.NARRATIVE,
        text: "客户端的测试代码改成了："
      },
      {
        type: ContentType.CODE,
        language: "java",
        code: `Scanner sc = new Scanner(System.in);
System.out.print("请输入数字A：");
double numberA = Double.parseDouble(sc.nextLine());

System.out.print("请选择运算符号(+、-、*、/)：");
String strOperate = sc.nextLine();

System.out.print("请输入数字B：");
double numberB = Double.parseDouble(sc.nextLine());

// 此时只需要调用 Operation 类的静态方法
double result = Operation.getResult(numberA, numberB, strOperate);
System.out.println("结果是：" + result);`
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "鸟哥，我写好了，你看看！"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "孺子可教也，写得不错，这样就完全把业务和界面分离了。"
        }
      },
      {
        type: ContentType.NARRATIVE,
        text: "小菜心中暗骂：“你才是鸟呢。”口中说道：“如果你现在要我写一个Windows应用程序的计算器，我就可以复用这个运算类（Operation）了。”"
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "不单是Windows程序，Web版程序需要运算可以用它，手机App需要的移动系统的软件需要运算也可以用它呀。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "哈，面向对象不过如此。下回写类似代码不怕了。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "别急，仅此而已，实在谈不上完全面向对象，你只用了面向对象三大特性的一个封装，还有两个没用呢。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "面向对象三大特性不就是**封装、继承和多态**吗？这里我用到的应该是封装吧？"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "对！面向对象编程的一个特点叫‘**封装**’：将程序的一些方法和执行步骤隐藏起来，**只开放外部接口来访问**。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "打比方说，我们根本不需要知道一辆车的引擎究竟如何工作，其实99%的驾驶员是不了解引擎工作原理的，但他们只要踩下油门，就可以发送指令让引擎工作。那么对于驾驶员来说，引擎就是被**封装**好的。"
        }
      },
      {
        type: ContentType.IMAGE,
        imageUrl: "https://fdy-pic-1301838659.cos.ap-guangzhou.myqcloud.com/img/image-20251124184944975.png",
        caption: "封装的例子：汽车引擎"
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "嗯！我的计算器程序有了封装这还不够吗？我实在看不出，这么小的程序如何用到继承。至于多态，其实我一直也不太了解它到底有什么好处，如何使用它。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "慢慢来，要学的东西多着呢，你好好想想该如何应用面向对象的继承和多态。"
        }
      }
    ]
  },
  {
    id: "inheritance",
    title: "1.9 紧耦合 vs. 松耦合",
    content: [
      {
        type: ContentType.NARRATIVE,
        text: "第二天。"
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "你说计算器这样的小程序还可以用到面向对象三大特性？继承和多态怎么可能用得上？我实在不能理解。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "小菜很有钻研精神嘛，好，今天我让你功力加深一级。你先要考虑一下，你昨天写的这个代码，能否做到很灵活地可修改和扩展呢？"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "我已经把业务和界面分离了呀，这不是很灵活了吗？"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "如果我希望增加一个指数运算，比如可以算2¹⁰=？，你如何改？"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "那只需要改Operation类就行了，在switch中加一个分支就行了。"
        }
      },
      {
        type: ContentType.CODE,
        language: "java",
        code: `switch (operate) {
    case "+":
        result = numberA + numberB;
        break;
    case "-":
        result = numberA - numberB;
        break;
    case "*":
        result = numberA * numberB;
        break;
    case "/":
        result = numberA / numberB;
        break;
    // 增加新的分支，直接修改了原有代码，违反了开闭原则
    case "pow":
        result = java.lang.Math.pow(numberA, numberB);
        break;
}`
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "问题是你要加一个平方根运算。却需要让加减乘除的运算都得来参与编译，如果你一不小心，把加法运算改成了减法，这岂不是大大的糟糕。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "打个比方，如果现在公司要求你为公司的薪资管理系统做维护，原来只有技术人员（月薪）、市场销售人员（底薪+提成）、经理（年薪+股份）三种运算算法，现在要增加兼职工作人员（时薪）的算法，但按照你昨天的程序写法，公司就必须要把它包含三种算法的运算类代码都给你，让你修改。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "你如果心中小算盘一打，‘公司给我的工资这么低，我真是郁闷，这下有机会了’，于是你除了增加了兼职算法以外，在技术人员（月薪）算法中写了一句"
        }
      },
      {
        type: ContentType.CODE,
        language: "java",
        code: `// 危险的操作！
if (员工是小菜) {
    salary = salary * 1.1; // 偷偷加工资
}`
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "那就意味着，你的月薪每月都会增加10%（小心被抓去坐牢），本来是让你加一个功能，却使得原有的运行良好的功能代码产生了变化，这个**风险太大了**。你明白了吗？"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "哦，你的意思是，我应该把**加减乘除等运算分离**，修改其中一个不影响另外的几个，增加运算算法也不影响其他代码，是这样吗？"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "自己想去吧，如何用继承和多态，你应该有感觉了。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "哦！我明白了，要用**继承**来实现运算类。OK，我马上去写。"
        }
      },
      {
        type: ContentType.NARRATIVE,
        text: "Operation运算类："
      },
      {
        type: ContentType.CODE,
        language: "java",
        code: `// 定义抽象的运算类
public abstract class Operation {
    // 抽象方法，强制子类实现
    public double getResult(double numberA, double numberB) {
        return 0d;
    }
}`
      },
      {
        type: ContentType.NARRATIVE,
        text: "加减乘除类："
      },
      {
        type: ContentType.CODE,
        language: "java",
        code: `// 加法类，继承自 Operation
public class Add extends Operation {
    public double getResult(double numberA, double numberB) {
        return numberA + numberB;
    }
}

// 减法类
public class Sub extends Operation {
    public double getResult(double numberA, double numberB) {
        return numberA - numberB;
    }
}

// 乘法类
public class Mul extends Operation {
    public double getResult(double numberA, double numberB) {
        return numberA * numberB;
    }
}

// 除法类
public class Div extends Operation {
    public double getResult(double numberA, double numberB) {
        if (numberB == 0) {
            System.out.println("除数不能为0");
            throw new ArithmeticException();
        }
        return numberA / numberB;
    }
}`
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "大鸟哥，我按照你说的写法写出来了一部分，首先是一个运算抽象类，它有一个方法getResult(numberA, numberB)，用于得到结果。\n然后我把加减乘除都写成了运算类的子类，继承它后，重写了getResult()方法，这样如果要修改任何一个算法，就不需要提供其他算法的代码了。\n但问题来了，我如何让计算器知道我是希望用哪一个算法呢？"
        }
      },
      {
        type: ContentType.QUOTE,
        text: "以上代码读者如果感觉阅读吃力，说明你对继承、多态、方法重写等概念的理解尚不够，建议先阅读本书的第0章，理解了这些基本概念后再继续往下阅读。"
      }
    ]
  },
  {
    id: "simple-factory",
    title: "1.10 简单工厂模式",
    content: [
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "写得很不错嘛，大大超出我的想象了，你现在的问题其实就是**如何去实例化对象**的问题。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "哈，今天心情不错，再教你一招‘**简单工厂模式**’，也就是说，到底要实例化谁，将来会不会增加实例化的对象，比如增加指数运算，这是很容易变化的地方，应该考虑用一个**单独的类**来做这个创造实例的过程，这就是**工厂**，来，我们看看这个类如何写。"
        }
      },
      {
        type: ContentType.NARRATIVE,
        text: "简单运算工厂类："
      },
      {
        type: ContentType.CODE,
        language: "java",
        code: `// 简单工厂类
public class OperationFactory {
    
    // 静态工厂方法：根据传入的运算符，决定实例化哪一个具体的 Operation 子类
    public static Operation createOperate(String operate) {
        Operation oper = null;
        switch (operate) {
            case "+":
                oper = new Add(); // 实例化加法
                break;
            case "-":
                oper = new Sub(); // 实例化减法
                break;
            case "*":
                oper = new Mul(); // 实例化乘法
                break;
            case "/":
                oper = new Div(); // 实例化除法
                break;
        }
        return oper; // 返回父类引用（多态）
    }
}`
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "哈，看到了吧，这样子，你只需要输入运算符号，工厂就实例化出合适的对像，通过**多态**，返回父类的方式实现了计算器的结果。"
        }
      },
      {
        type: ContentType.NARRATIVE,
        text: "客户端代码："
      },
      {
        type: ContentType.CODE,
        language: "java",
        code: `// 使用工厂来创建具体的运算对象
Operation oper = OperationFactory.createOperate(strOperate);

// 调用通用的 getResult 方法，执行具体子类的逻辑
double result = oper.getResult(numberA, numberB);`
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "哈，界面的实现就是这样代码，不管你是控制台程序、Windows程序、Web程序、手机App程序，都可以用这段代码来实现计算器的功能，如果有一天我们需更改加法运算，我们只需要改哪里？"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "改Add类就可以了。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "那么我们需要增加各种复杂运算，比如平方根、立方根、自然对数、正弦余弦等，如何做？"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "只要增加相应的运算子类就可以了呀。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "嗯？够了吗？"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "对了，还需要去修改运算类工厂，在switch中增加分支。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "哈，那才对，那如果要修改界面呢？"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "那就去改界面呀，关运算什么事呀？"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "好了，最后，我们来看看这几个类的结构图。"
        }
      },
      {
        type: ContentType.IMAGE,
        imageUrl: "https://fdy-pic-1301838659.cos.ap-guangzhou.myqcloud.com/img/image-20251124185102540.png",
        caption: "简单工厂模式 UML 类图"
      }
    ]
  }
];