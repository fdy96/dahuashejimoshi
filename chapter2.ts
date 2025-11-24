import { ChapterSection, ContentType } from './types';

export const chapter2Sections: ChapterSection[] = [
  {
    id: "cash-register-v1",
    title: "2.1 商场收银软件",
    content: [
      {
        type: ContentType.NARRATIVE,
        text: "时间：2月27日22点  |  地点：大鸟房间  |  人物：小菜、大鸟"
      },
      {
        type: ContentType.QUOTE,
        text: "“小菜，给你出个作业，做一个商场收银软件，营业员根据客户所购买商品的单价和数量，向客户收费。”"
      },
      {
        type: ContentType.IMAGE,
        imageUrl: "https://fdy-pic-1301838659.cos.ap-guangzhou.myqcloud.com/img/image-20251124192418307.png",
        caption: "商场收银系统 v1.0 界面"
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "就这个？没问题呀。用两个文本框来输入单价和数量，一个‘确定’按钮来算出每种商品的费用，用个列表框来记录商品的清单，一个标签来记录总计，不就行了?!"
        }
      },
      {
        type: ContentType.NARRATIVE,
        text: "商场收银系统v1.0关键代码如下："
      },
      {
        type: ContentType.CODE,
        language: "java",
        code: `// 声明变量
double price = 0d;      //商品单价
int num = 0;            //商品购买数量
double totalPrices = 0d;//当前商品合计费用
double total = 0d;      //总计所有商品费用

Scanner sc = new Scanner(System.in);

// 循环录入商品
do {
    // 模拟下拉框选择打折模式
    System.out.println("请输入商品销售模式 1.原价 2.八折 3.七折：");
    int discount = Integer.parseInt(sc.nextLine());
    System.out.print("请输入商品单价：");
    price = Double.parseDouble(sc.nextLine());
    System.out.print("请输入商品数量：");
    num = Integer.parseInt(sc.nextLine());
    
    if (price > 0 && num > 0) {
        // 通过单价*数量获得当前商品合计费用
        totalPrices = price * num;
        
        // 累加到总费用
        total = total + totalPrices;
        
        System.out.println("总计：" + total + "元");
    }
} while(price > 0 && num > 0);`
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "大鸟，来看看，这不就是你要的收银软件吗？我不到半小时就搞定了。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "哈哈，很快嘛。现在我要求商场对商品搞活动，**所有的商品打八折**。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "那不就是在totalPrices后面乘以一个0.8吗？"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "小子，难道商场活动结束，不打折了，你还要再改一遍程序代码，然后再用改后的程序去把所有机器全部安装一次吗？再说，还有可能因为周年庆，打五折的情况，你怎么办？"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "啊，我想得是简单了点。其实只要加一个下拉选择框就可以解决你说的问题。"
        }
      },
      {
        type: ContentType.NARRATIVE,
        text: "大鸟微笑不语。"
      }
    ]
  },
  {
    id: "add-discount",
    title: "2.2 增加打折",
    content: [
      {
        type: ContentType.NARRATIVE,
        text: "商场收银系统v1.1关键代码如下："
      },
      {
        type: ContentType.CODE,
        language: "java",
        code: `int discount = 0; //商品销售模式 1.原价 2.八折 3.七折
// ... 获取输入 ...

// 根据选择的模式进行计算
switch(discount){
    case 1:
        totalPrices = price * num; //正常收费
        break;
    case 2:
        totalPrices = price * num * 0.8; //打八折
        break;
    case 3:
        totalPrices = price * num * 0.7; //打七折
        break;
}
total = total + totalPrices;`
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "这下可以了吧，只要我事先把商场可能的打折都做成下拉选择框的项，要变化的可能性就小多了。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "这比刚才灵活性上是好多了，不过重复代码很多，比如3个分支要执行的语句除了打折多少以外几乎没什么不同，应该考虑重构一下。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "不过这还不是最主要的，现在我的需求又来了，商场的活动加大，需要有**满300返100**的促销算法，你说怎么办？"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "满300返100，那要是700就要返200了？这个必须要写函数了吧？"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "小菜呀，看来之前教你的白教了，这里面看不出什么名堂吗？"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "哦！我想起来了，你的意思是**简单工厂模式**是吧，对的对的，我可以先写一个父类，再继承它实现多个打折和返利的子类，利用多态，完成这个代码。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "你打算写几个子类？"
        }
      },
      {
        type: ContentType.IMAGE,
        imageUrl: "https://fdy-pic-1301838659.cos.ap-guangzhou.myqcloud.com/img/image-20251124192820902.png",
        caption: "商场收银系统增加计算方式"
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "根据需求呀，比如八折、七折、五折、满300送100、满200送50……要几个写几个。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "小菜又不肯动脑子了，有必要这样吗？如果我现在要三折，我要满300送80，你难道再去加子类？你不想想看，这当中哪些是相同的，哪些是不同的？"
        }
      }
    ]
  },
  {
    id: "simple-factory-impl",
    title: "2.3 简单工厂实现",
    content: [
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "对的，这里打折基本都是一样的，只要有个初始化参数就可以了。满几送几的，需要两个参数才行，明白，现在看来不麻烦了。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "面向对象的编程，并不是类越多越好，类的划分是为了**封装**，但分类的基础是**抽象**，具有相同属性和功能的对象集合才是类。"
        }
      },
      {
        type: ContentType.NARRATIVE,
        text: "大约1个小时后，小菜交出了第三份作业。"
      },
      {
        type: ContentType.IMAGE,
        imageUrl: "https://fdy-pic-1301838659.cos.ap-guangzhou.myqcloud.com/img/image-20251124192857022.png",
        caption: "收费策略类图"
      },
      {
        type: ContentType.CODE,
        language: "java",
        code: `// 收费抽象类
public abstract class CashSuper {
    // 收取费用的抽象方法，参数为单价和数量
    public abstract double acceptCash(double price, int num);
}

// 正常收费子类
public class CashNormal extends CashSuper {
    public double acceptCash(double price, int num) {
        return price * num;
    }
}

// 打折收费子类
public class CashRebate extends CashSuper {
    private double moneyRebate = 1d; 
    
    // 初始化时，必须要输入折扣率，如八折就输入0.8
    public CashRebate(double moneyRebate) {
        this.moneyRebate = moneyRebate;
    }
    
    public double acceptCash(double price, int num) {
        // 在原价基础上乘以折扣率
        return price * num * this.moneyRebate;
    }
}

// 返利收费子类
public class CashReturn extends CashSuper {
    private double moneyCondition = 0d; 
    private double moneyReturn = 0d;    
    
    // 初始化时需要输入返利条件和返利值
    // 比如“满300返100”，则 moneyCondition=300, moneyReturn=100
    public CashReturn(double moneyCondition, double moneyReturn) {
        this.moneyCondition = moneyCondition;
        this.moneyReturn = moneyReturn;
    }
    
    public double acceptCash(double price, int num) {
        double result = price * num;
        // 若大于返利条件，则需要减去返利值
        if (moneyCondition > 0 && result >= moneyCondition)
            // Math.floor(result / moneyCondition) 算出有多少个300，就减去多少个100
            result = result - Math.floor(result / moneyCondition) * moneyReturn;
        return result;
    }
}

// 收费对象工厂
public class CashFactory {
    public static CashSuper createCashAccept(int cashType) {
        CashSuper cs = null;
        switch (cashType) {
            case 1: cs = new CashNormal(); break;
            case 2: cs = new CashRebate(0.8d); break; // 打八折
            case 3: cs = new CashRebate(0.7d); break; // 打七折
            case 4: cs = new CashReturn(300d, 100d); break; // 满300返100
        }
        return cs;
    }
}`
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "大鸟，搞定，这次无论你要怎么改，我都可以简单处理就行了。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "是吗，我要是需要打五折和满500送200的促销活动，如何办？"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "只要在现金工厂当中加两个条件，就OK了。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "简单工厂模式虽然也能解决这个问题，但这个模式只是解决对象的创建问题，而且由于工厂本身包括所有的收费方式，商场是可能经常性地更改打折额度和返利额度，每次维护或扩展收费方式都要改动这个工厂。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "面对算法的异常变动，应该有更好的办法。好好去研究一下其他的设计模式，你会找到答案的。"
        }
      }
    ]
  },
  {
    id: "strategy-pattern-intro",
    title: "2.4 策略模式",
    content: [
      {
        type: ContentType.NARRATIVE,
        text: "时间：2月28日19点  |  地点：大鸟房间  |  人物：小菜、大鸟"
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "我找到相关的设计模式了，应该是**策略模式（Strategy）**。策略模式定义了算法家族，分别封装起来，让它们之间可以互相替换。"
        }
      },
      {
        type: ContentType.QUOTE,
        text: "策略模式（Strategy）：它定义了算法家族，分别封装起来，让它们之间可以互相替换，此模式让算法的变化，不会影响到使用算法的客户。[DP]"
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "商场收银时如何促销，用打折还是返利，其实都是一些算法，用工厂来生成算法对象，这没有错，但算法本身只是一种策略，最重要的是这些算法是随时都可能互相替换的，这就是变化点。"
        }
      },
      {
        type: ContentType.IMAGE,
        imageUrl: "https://fdy-pic-1301838659.cos.ap-guangzhou.myqcloud.com/img/image-20251124192944346.png",
        caption: "策略模式结构图"
      },
      {
        type: ContentType.CODE,
        language: "java",
        code: `// 抽象算法类 Strategy
abstract class Strategy {
    // 算法方法
    public abstract void algorithmInterface();
}

// 具体算法A
class ConcreteStrategyA extends Strategy {
    // 算法A实现方法
    public void algorithmInterface() { System.out.println("算法A实现"); }
}

// 上下文 Context
class Context {
    Strategy strategy;
    
    // 初始化时，传入具体的策略对象
    public Context(Strategy strategy) {
        this.strategy = strategy;
    }
    
    // 上下文接口
    public void contextInterface() {
        strategy.algorithmInterface();
    }
}`
      }
    ]
  },
  {
    id: "strategy-impl",
    title: "2.5 策略模式实现",
    content: [
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "我明白了，我昨天写的CashSuper就是抽象策略，而正常收费、打折收费和返利收费就是三个具体策略。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "是的，来吧，你模仿策略模式的基本代码，改写一下你的程序。"
        }
      },
      {
        type: ContentType.IMAGE,
        imageUrl: "https://fdy-pic-1301838659.cos.ap-guangzhou.myqcloud.com/img/image-20251124193126714.png",
        caption: "策略模式实现的收银系统类图"
      },
      {
        type: ContentType.CODE,
        language: "java",
        code: `public class CashContext {
    private CashSuper cs; // 声明一个CashSuper对象
    
    // 通过构造方法，传入具体的收费策略
    public CashContext(CashSuper csuper) {
        this.cs = csuper;
    }
    
    public double getResult(double price, int num) {
        // 根据收费策略的不同，计算不同的结果
        return this.cs.acceptCash(price,num);
    }
}`
      },
      {
        type: ContentType.CODE,
        language: "java",
        code: `CashContext cc = null;
// 客户端需要知道具体的策略类，并手动实例化
switch(discount) {
    case 1:
        cc = new CashContext(new CashNormal());
        break;
    case 2:
        cc = new CashContext(new CashRebate(0.8d));
        break;
    case 3:
        cc = new CashContext(new CashRebate(0.7d));
        break;
    case 4:
        cc = new CashContext(new CashReturn(300d, 100d));
        break;
}
// 通过 Context 调用算法，隔离了具体算法
totalPrices = cc.getResult(price,num);`
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "大鸟，代码是模仿着写出来了。但我感觉这样做不又回到了原来的老路了吗，在客户端去判断用哪一个算法？"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "是的，但是你有没有什么好办法，把这个判断的过程从客户端程序转移走呢？难道简单工厂就一定要是一个单独的类吗？"
        }
      }
    ]
  },
  {
    id: "strategy-factory-combo",
    title: "2.6 策略与简单工厂结合",
    content: [
      {
        type: ContentType.CODE,
        language: "java",
        code: `public class CashContext {
    private CashSuper cs; 
    
    // 改造构造方法：参数不是具体的策略对象，而是类型（类似工厂模式）
    // 将实例化具体策略的过程转移到 Context 中
    public CashContext(int cashType) { 
        switch (cashType) {
            case 1: this.cs = new CashNormal(); break;
            case 2: this.cs = new CashRebate(0.8d); break;
            case 3: this.cs = new CashRebate(0.7d); break;
            case 4: this.cs = new CashReturn(300d, 100d); break;
        }
    }
    
    public double getResult(double price, int num) {
        return this.cs.acceptCash(price,num);
    }
}`
      },
      {
        type: ContentType.CODE,
        language: "java",
        code: `// 客户端代码变得非常简洁
// 客户端只需要认识 CashContext 一个类，耦合度大大降低
CashContext cc = new CashContext(discount);
totalPrices = cc.getResult(price,num);`
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "嗯，原来简单工厂模式并非只有建一个工厂类的做法，还可以这样子做。此时比刚才的模仿策略模式的写法要清楚多了，客户端代码简单明了。"
        }
      },
      {
        type: ContentType.IMAGE,
        imageUrl: "https://fdy-pic-1301838659.cos.ap-guangzhou.myqcloud.com/img/image-20251124193202352.png",
        caption: "简单工厂 vs 策略模式结合简单工厂"
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "你的意思是说，简单工厂模式我需要让客户端认识两个类，CashSuper和CashFactory，而策略模式与简单工厂结合的用法，客户端就只需要认识一个类CashContext就可以了。**耦合更加降低**。"
        }
      }
    ]
  },
  {
    id: "strategy-analysis",
    title: "2.7 策略模式解析",
    content: [
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "回过头来反思一下策略模式，策略模式是一种定义一系列算法的方法，从概念上来看，所有这些算法完成的都是相同的工作，只是实现不同，它可以以相同的方式调用所有的算法，减少了各种算法类与使用算法类之间的耦合。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "策略模式的Strategy类层次为Context定义了一系列的可供重用的算法或行为。继承有助于析取出这些算法中的公共功能。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "另外一个策略模式的优点是**简化了单元测试**，因为每个算法都有自己的类，可以通过自己的接口单独测试。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "你能用一句话来概况这个优点吗？"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Xiao Cai",
          text: "**策略模式封装了变化。**"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "说得非常好。不过，它依然不够完美。因为在CashContext里还是用到了switch，如果需要增加一种算法，你就必须要更改CashContext中的switch代码。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "高手和菜鸟的区别就是高手可以花同样的代价获得最大的收益或者说做同样的事花最小的代价。面对同样的需求，当然是改动越小越好。"
        }
      },
      {
        type: ContentType.DIALOGUE,
        dialogue: {
          speaker: "Da Niao",
          text: "当然有更好的办法。这个办法就是用到了**反射（Reflect）技术**，不过今天就不讲了，以后会再提它的。"
        }
      }
    ]
  }
];