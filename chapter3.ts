import { ChapterSection, ContentType } from './types';

export const chapter3Sections: ChapterSection[] = [
  {
    id: "ereader-vs-phone",
    title: "3.1 阅读干吗不直接用手机？",
    content: [
      {
        type: ContentType.NARRATIVE,
        text: "时间：2月28日18点 | 地点：小菜房间 | 人物：小菜、大鸟"
      },
      {
        type: ContentType.NARRATIVE,
        text: "大鸟进入小菜房间，见到小菜在看手机。问他在看什么？"
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "我在看《三体》的电子书呢，这本科幻小说挺好看的。"
        }
      },
      {
        type: ContentType.IMAGE,
        imageUrl: "https://fdy-pic-1301838659.cos.ap-guangzhou.myqcloud.com/img/image-20251124195139984.png",
        caption: "科幻小说《三体》"
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "《三体》这么好看？最近买了一个电子阅读器，正好去购买电子书看看。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "电子阅读器？有必要用这种单独设备吗？为什么不直接在手机上看呢？"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "嘿嘿，这个还真是不一样。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "你说不一样就不一样吧，我先看书了。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "嗯！等我看过《三体》再和你聊。"
        }
      }
    ]
  },
  {
    id: "phone-impure",
    title: "3.2 手机不纯粹",
    content: [
      {
        type: ContentType.NARRATIVE,
        text: "时间：3月2日22点 | 地点：小菜房间 | 人物：小菜、大鸟"
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "小菜，《三体》看完了没？我刚看完《三体2：黑暗森林》部分，就想来找你聊聊了。罗辑厉害，黑暗森林法则竟然可以让三体外星人功败垂成。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "啊，这才几天呀，你已经看了这么多了。我《三体》的第一部还没看完呢。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "哈哈，你用手机看电子书，我猜也猜得到，**效率一定是较低的**。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "为什么？"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "因为**手机不纯粹**。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "不纯粹？手机方便呀，我可以随时随地拿出手机看书，在家可以看，在公交地铁上可以看，吃饭的时候可以看，上厕所时还可以看。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "你说得没错，手机确实很方便。但是现在的手机就是一台小型智能电脑。它不仅能打电话，还能听音乐、看电影电视、与个人交流、与一群人群聊，可以随时表达自己的情绪……"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "呵呵，这叫吃瓜。但对于阅读书来说，手机也不是很好的工具吗？"
        }
      }
    ]
  },
  {
    id: "srp-intro",
    title: "3.3 电子阅读器vs.手机",
    content: [
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "理想的阅读，不管是优秀的小说，还是专业的图书，经过一段适应时间，可以进入一种沉浸状态，达到‘**心流**’的境界。进入这样的状态，我们会非常专注，废寝忘食，会拥有很大的充实感。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "我好像很久没有这样的感觉了。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "原因可能就在于你用手机在看书——阅读。智能手机功能太强了，而且它会不断地接收外界的消息。你确实在阅读，但同时，你也在不断被打扰。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "哦，原来是这样。这么说，电子阅读器的确可以避免这一点，它除了阅读什么都干不了。"
        }
      },
      {
        type: ContentType.IMAGE,
        imageUrl: "https://fdy-pic-1301838659.cos.ap-guangzhou.myqcloud.com/img/image-20251124195204041.png",
        caption: "专注阅读的电子阅读器"
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "电子阅读器只针对阅读来设计产品，做到了**功能上的纯粹**。而这也是我们面向对象程序设计的最重要原则之一——**单一职责原则**。"
        }
      }
    ]
  },
  {
    id: "single-responsibility-principle",
    title: "3.4 单一职责原则",
    content: [
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "设计模式中有一个非常重要的原则——**单一职责**。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "哦，听字面意思，单一职责原则，意思就是说，功能要单一？"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "哈，可以简单地这么理解，它的准确解释是，**就一个类而言，应该仅有一个引起它变化的原因**。"
        }
      },
      {
        type: ContentType.QUOTE,
        text: "**单一职责原则（SRP）**\n就一个类而言，应该仅有一个引起它变化的原因。"
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "我们在做编程的时候，很自然地就会给一个类加各种各样的功能，比如把算法、数据库访问代码都写到窗体类中。这就意味着，无论任何需求要求，你都需要更改这个窗体类，这其实是很糟糕的，**维护麻烦，复用不可能，也缺乏灵活性**。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "是的，我写代码一般刚开始就是把所有的方法直接写在窗体类的代码当中的。"
        }
      }
    ]
  },
  {
    id: "tetris-design",
    title: "3.5 方块游戏的设计",
    content: [
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "我们再来举些例子，比如就拿手机里的俄罗斯方块游戏为例。要是让你开发这个小游戏，你如何考虑？"
        }
      },
      {
        type: ContentType.IMAGE,
        imageUrl: "https://fdy-pic-1301838659.cos.ap-guangzhou.myqcloud.com/img/image-20251124195243498.png",
        caption: "俄罗斯方块游戏"
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "那当然是先建立一个窗体，然后加一个用于游戏框的控件，一个按钮Button来控制‘开始’，最后计时器控制用于分时动画的编程。写代码当然就是编写计时器事件来绘出和擦除方块，并做出堆积和消层的判断。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "看来你的面向过程开发已经根深蒂固了。你把所有的代码都写在了窗体.java这个类里，你觉得这合理吗？"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "可能不合理，但我实在没想到怎么分离它。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "打个比方，如果现在还要你开发的是3D版的俄罗斯方块，或者是Web版或Windows窗体版俄罗斯方块程序，它们能运行Java语言编写的应用程序。那你现在这个代码有什么可以复用的吗？"
        }
      },
      {
        type: ContentType.IMAGE,
        imageUrl: "https://fdy-pic-1301838659.cos.ap-guangzhou.myqcloud.com/img/image-20251124195319261.png",
        caption: "3D版俄罗斯方块"
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "你都已经说了，不能使用，我当然就没办法使用了。Copy过去，再针对代码做些改进吧。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "但这当中，有些东西是始终没变的。你是说，下落、旋转、碰撞判断、移动、堆积这些**游戏逻辑**吧？"
        }
      },
      {
        type: ContentType.IMAGE,
        imageUrl: "https://fdy-pic-1301838659.cos.ap-guangzhou.myqcloud.com/img/image-20251124195328097.png",
        caption: "游戏界面 vs 游戏逻辑"
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "说得没错，这些都是和游戏有关的逻辑，和界面如何表示没有什么关系，为什么要写在一个类里面呢？**如果一个类承担的职责过多，就等于把这些职责耦合在一起**。这种耦合会导致脆弱的设计。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "所谓的碰撞判断，其实就是什么？"
        }
      },
      {
        type: ContentType.IMAGE,
        imageUrl: "https://fdy-pic-1301838659.cos.ap-guangzhou.myqcloud.com/img/image-20251124195342945.png",
        caption: "游戏逻辑的抽象网格"
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "我知道了，是否能左移，就是判断数组下标的问题。所谓游戏逻辑，不过就是**数组的每一项值变化的问题**。而界面表示逻辑，不过是根据数组的数据进行绘出和擦除。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "因此，至少应该考虑将此程序分为两个类，一个是**游戏逻辑**的类，一个是**窗体**的类。当有一天要改变界面，或者换界面时，不过是窗体类的变化，和游戏逻辑无关，以此达到复用的目的。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "其实要去判断是否应该分离出类来，也不难，那就是**如果你能想到多于一个的动机去改变一个类，那么这个类就具有多于一个的职责**，就应该考虑类的职责分离。"
        }
      }
    ]
  },
  {
    id: "srp-summary",
    title: "3.6 电子阅读器与手机的利弊",
    content: [
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "这下你知道你的手机为什么不能让我们进行沉浸式阅读的原因了吧？"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "如果手机只用来接打电话，电子阅读器用来阅读，职责的分离是可以把事情做得更好。不过这其实不是一回事哦，现在的智能手机承担的职责多，并不等于就不好，只不过产品的分工不同而已。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "整合当然是一种很好的思想。但对于我们编程来说，要在类的职责分离上多思考，做到单一职责，这样你的代码才是真正的**易维护、易扩展、易复用、灵活多样**。"
        }
      }
    ]
  }
];