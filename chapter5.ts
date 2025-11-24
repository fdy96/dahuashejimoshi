import { ChapterSection, ContentType } from './types';

export const chapter5Sections: ChapterSection[] = [
  {
    id: "computer-repair-intro",
    title: "5.1 MM请求修电脑",
    content: [
      {
        type: ContentType.NARRATIVE,
        text: "时间：3月12日19点 | 地点：小菜、大鸟住所的客厅 | 人物：小菜、大鸟、娇娇"
      },
      {
        type: ContentType.NARRATIVE,
        text: "“死了都要爱，不淋漓尽致不痛快……”原来是小菜的手机铃声。"
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "你小子，用这歌作铃声，吓唬人啊！"
        }
      },
      {
        type: ContentType.NARRATIVE,
        text: "小菜接通电话，是一个叫娇娇的女生，她的电脑坏了，蓝屏死机，请求小菜帮忙。"
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Jiaojiao",
          text: "快点帮我呀，电脑不能用了啊！蓝底白字的一堆莫名其妙的英文，过一会就重启了。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "哦，蓝屏死机吧，估计内存有问题。你在金山，我在宝山，太远了。要不你打开机箱看看，或许有两个内存，可以拔一根试试。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Jiaojiao",
          text: "机箱怎么打开呢？"
        }
      },
      {
        type: ContentType.NARRATIVE,
        text: "小菜通过电话遥控指导娇娇打开了机箱。"
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "你小子，人家在困难时刻想到得到你，说明心中有你，懂吗？这是机会！"
        }
      }
    ]
  },
  {
    id: "remote-repair",
    title: "5.2 电话遥控修电脑",
    content: [
      {
        type: ContentType.NARRATIVE,
        text: "十分钟后。小菜的手机铃声再次响起：“我在这儿等着你回来，等着你回来，看那桃花开……”"
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "采花痴，你就不能找个好听的歌呀。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Jiaojiao",
          text: "小菜，我打开机箱了，快说下一步怎么做！"
        }
      },
      {
        type: ContentType.IMAGE,
        imageUrl: "https://fdy-pic-1301838659.cos.ap-guangzhou.myqcloud.com/img/image-20251124200232424.png",
        caption: "拔插内存条"
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "你试着找内存条，大约是10厘米长，2厘米宽。拔一根，然后开机试试看。"
        }
      },
      {
        type: ContentType.NARRATIVE,
        text: "五分钟后，娇娇兴奋地告诉小菜电脑修好了。并约定周六请小菜吃饭，顺便换内存。"
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Jiaojiao",
          text: "哈，没有死机了啊，小菜，你太厉害了！周六下午5点在徐家汇太平洋数码门口吧。"
        }
      }
    ]
  },
  {
    id: "dip-principle",
    title: "5.3 依赖倒转原则",
    content: [
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "小菜走桃花运了哦。不过你想想，为什么修电脑可以通过电话就教会了？"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "因为PC易插拔，不管哪一个出问题，都可以在不影响别的部件的前提下进行修改或替换。"
        }
      },
      {
        type: ContentType.IMAGE,
        imageUrl: "https://fdy-pic-1301838659.cos.ap-guangzhou.myqcloud.com/img/image-20251124200427268.png",
        caption: "电脑硬件的模块化"
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "电脑里易插拔，面向对象里叫**强内聚、松耦合**。CPU只需要把接口定义好，内部再复杂我也不让外界知道，而主板只需要预留与CPU针脚的插槽就可以了。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "这里需要重点讲讲一个新的原则，叫**依赖倒转原则（Dependency Inversion Principle）**。"
        }
      },
      {
        type: ContentType.QUOTE,
        text: "**依赖倒转原则**\n(1) 高层模块不应该依赖低层模块。两个都应该依赖抽象。\n(2) 抽象不应该依赖细节。细节应该依赖抽象。"
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "说白了，就是要**针对接口编程，不要对实现编程**。"
        }
      },
      {
        type: ContentType.IMAGE,
        imageUrl: "https://fdy-pic-1301838659.cos.ap-guangzhou.myqcloud.com/img/image-20251124200606463.png",
        caption: "高层模块不应直接依赖低层模块"
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "如果高层模块依赖于低层模块，当客户希望使用不同的数据库时，我们就没法复用高层模块了。如果它们都依赖于抽象（接口），那么任何一个更改都不用担心其他受到影响。"
        }
      }
    ]
  },
  {
    id: "liskov-substitution",
    title: "5.4 里氏代换原则",
    content: [
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "为什么依赖了抽象的接口或抽象类，就不怕更改呢？这里还有一个原则：**里氏代换原则（LSP）**。"
        }
      },
      {
        type: ContentType.QUOTE,
        text: "**里氏代换原则（LSP）**\n子类型必须能够替换掉它们的父类型。"
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "我问你，企鹅是鸟吗？企鹅可以继承鸟这个类吗？"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "企鹅是一种特殊的鸟，当然可以继承。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "哈，你上当了。如果鸟是可以飞的，而企鹅不能飞。那么企鹅就不能继承鸟类。因为**子类必须拥有父类所有非private的行为和属性**。"
        }
      },
      {
        type: ContentType.IMAGE,
        imageUrl: "https://fdy-pic-1301838659.cos.ap-guangzhou.myqcloud.com/img/image-20251124200622432.png",
        caption: "企鹅继承鸟类的问题"
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "正是由于有了这个原则，使得继承复用成为可能。只有当子类可以替换掉父类，软件单位的功能不受影响时，父类才能真正被复用。"
        }
      },
      {
        type: ContentType.IMAGE,
        imageUrl: "https://fdy-pic-1301838659.cos.ap-guangzhou.myqcloud.com/img/image-20251124200632197.png",
        caption: "动物类的多态"
      },
      {
        type: ContentType.CODE,
        language: "java",
        code: `// 依赖倒转的体现
动物 animal = new 猫(); // 如果要换成羊，只需改这里
animal.吃喝();
animal.移动(); // 后面的代码无须改动`
      },
      {
        type: ContentType.IMAGE,
        imageUrl: "https://fdy-pic-1301838659.cos.ap-guangzhou.myqcloud.com/img/image-20251124200644310.png",
        caption: "依赖倒转结构图"
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "哦，我明白了，依赖倒转其实就是**谁也不要依靠谁，除了约定的接口**，大家都可以在灵活自如。"
        }
      }
    ]
  },
  {
    id: "radio-repair",
    title: "5.5 修收音机",
    content: [
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "还好，她没有问我如何修收音机，收音机里都是些电阻、三极管，电路板等东西，全都焊接在一起，我可不会修的。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "收音机就是典型的**耦合过度**。各个部件相互依赖，难以维护。电脑可以修，反而相对简单的收音机不能修，这其实就说明了很大的问题。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "依赖倒转其实可以说面向对象设计的标志，如果编写时考虑的都是如何针对抽象编程而不是针对细节编程，那就是面向对象的设计，反之那就是过程化的设计了。"
        }
      },
      {
        type: ContentType.NARRATIVE,
        text: "“浪奔，浪流，万里江海点点星光耀……”小菜的手机铃声又响了，这次换成了《新上海滩》。"
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "小菜，电话。小子，怎么又换成新上海滩的歌了。你怎么找的歌都跟爱过不去呀。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "来了来了，都尿只尿一半！喂！"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Jiaojiao",
          text: "小菜呀，我家收音机坏了，你能不能教我修修呢！"
        }
      }
    ]
  }
];