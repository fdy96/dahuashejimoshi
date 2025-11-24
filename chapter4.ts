import { ChapterSection, ContentType } from './types';

export const chapter4Sections: ChapterSection[] = [
  {
    id: "exam-failure",
    title: "4.1 考研失败",
    content: [
      {
        type: ContentType.NARRATIVE,
        text: "时间：3月5日20点 | 地点：小菜房间 | 人物：小菜、大鸟"
      },
      {
        type: ContentType.NARRATIVE,
        text: "“……多少次迎着冷眼与嘲笑，从没有放弃过心中的理想，一刹那恍惚，若有所失的感觉，不知不觉已变淡心里爱（谁明白我）……”"
      },
      {
        type: ContentType.NARRATIVE,
        text: "小菜此时正关在房中坐在桌前发呆，音箱中大声地放着Beyond乐队的《海阔天空》。此时有人敲门。打开一看，原来是大鸟。"
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "小菜，怎么听这么伤感的歌？发生什么事了？"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "今天研究生考试成绩出来了，我的英语成绩离分数线差两分。之前的努力白费了。为了考研，我没有做任何求职的准备，所以我们班不少同学都找到工作了，我却才刚开始。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "你考研复习的时候，每天学习多长时间，有没有休息的时候？"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "差不多十小时吧，其实效率并不高，有不少时候都困得不行，趴在桌上睡觉去了。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "这就对了，你为什么不利用休息的时间考虑一下自己的简历如何写，关心一下有些什么单位在招聘呢？小菜呀，你其实就是没有搞懂一个设计模式的原则。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "你想想看，中国香港澳门的顺利回归，有一个创举起了重要的作用，是什么？"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "啊，那还用说，是**一国两制**思想！"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "说得好，社会主义制度不能修改，在谈中国香港问题的时候，如果咬定中国香港回来必须要实现社会主义制度，那回归就困难重重了。为了回归的大局，**增加一种制度**又何尝不可。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "在软件设计模式中，这种不能修改，但可以扩展的思想也是最重要的一种设计原则，它就是**开放-封闭原则（The Open-Closed Principle，OCP）**。"
        }
      }
    ]
  },
  {
    id: "ocp-definition",
    title: "4.2 开放-封闭原则",
    content: [
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "开放、封闭，具体怎么解释呢？"
        }
      },
      {
        type: ContentType.QUOTE,
        text: "**开放-封闭原则**\n软件实体（类、模块、函数等）应该**可以扩展**，但是**不可修改**。"
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "这个原则其实是有两个特征，一个是说‘**对于扩展是开放的（Open for extension）**’，另一个是说‘**对于修改是封闭的（Closed for modification）**’。"
        }
      },
      {
        type: ContentType.IMAGE,
        imageUrl: "https://fdy-pic-1301838659.cos.ap-guangzhou.myqcloud.com/img/image-20251124195552952.png",
        caption: "修改封闭，扩展开放"
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "我们在做任何系统的时候，都不要指望系统一开始时需求确定，就再也不会变化。怎样的设计才能面对需求的改变却可以保持相对稳定？开放-封闭给了我们答案。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "我明白了，你的意思是说，设计软件要容易维护又不容易出问题的最好的办法，就是**多扩展，少修改**？"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "是的，比如说，我是公司老板，我规定九点上班。但有几个公司骨干，因为家远或者送孩子老是迟到。如果你是老板你怎么办？"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "应该改变管理方式，比如弹性上班工作制，或者以业绩为标准——这其实就是对**工作时间或业绩成效的修改关闭**，而对**时间制度扩展的开放**。"
        }
      }
    ]
  },
  {
    id: "handling-change",
    title: "4.3 何时应对变化",
    content: [
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "那我们应该怎么做？"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "开放-封闭原则的意思就是说，你设计的时候，时刻要考虑，尽量让这个类是足够好，写好了就不要去修改了，如果新需求来，我们**增加一些类**就完事了，原来的代码可能动也不动。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "这可能做到吗？怎么可能写完一个类就再也不改了呢？"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "绝对的对修改关闭是不可能的。设计人员必须对于他设计的模块应该对哪种变化封闭做出选择。他必须先**猜测出最有可能发生的变化种类**，然后构造抽象来隔离那些变化。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "我们是很难预先猜测，但我们却可以在发生小变化时，就及早去想办法应对发生更大变化的可能性。正所谓，同一地方，摔第一跤不是你的错，再次在此摔跤就是你的不对了。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "比如之前计算器的例子。先写加法，后来要加减法，发现需要修改代码，这就违背了OCP。于是重构，增加抽象运算类。这时又要加乘除法，就不需要去改Client了，而是**增加乘法和除法子类**就可。"
        }
      },
      {
        type: ContentType.IMAGE,
        imageUrl: "https://fdy-pic-1301838659.cos.ap-guangzhou.myqcloud.com/img/image-20251124195635150.png",
        caption: "通过继承和多态实现扩展"
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "‘开放-封闭原则’是面向对象设计的核心所在。遵循这个原则可以带来面向对象技术所声称的巨大好处，也就是**可维护、可扩展、可复用、灵活性好**。"
        }
      }
    ]
  },
  {
    id: "ocp-conclusion",
    title: "4.4 两手准备，并全力以赴",
    content: [
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "回过头来说，你考研和求职这两件事。考研复习计划是不应该更改的，这就是**对修改关闭**。但你完全可以抽出一点时间，来写写自己的简历，了解招聘资讯，既不影响考研，又增大找工作的可能性。这就是**对扩展开放**。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "是的，我就不信，我会比别人差！"
        }
      },
      {
        type: ContentType.NARRATIVE,
        text: "大鸟站起身走出了小菜的房间，此时Beyond的音乐再次响起，大鸟回头，伸出右手向前摆了个“V”字，说了声：“海阔天空，加油！”"
      },
      {
        type: ContentType.QUOTE,
        text: "“今天我寒夜里看雪飘过，怀着冷却了的心窝漂远方……仍然自由自我，永远高唱我歌，走遍千里！”"
      }
    ]
  }
];