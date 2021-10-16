// briggs: EI, SN, TF, JP
// color: brown, green, blue, red
// letter: a, b, c, d
var quizQuestions = [
  // question #1
  {
    question: 'أنا موجه نحو المهام من أجل تحقيق أهداف معينة',
    answers: [
      {
        // briggs, color, letter
        type: 'J,Brown,D',
        content: 'نعم، هذا انا'
      },
      {
        type: ' ',
        content: 'ليس لدي فكره'
      },
      {
        type: 'J,Brown,D,No',
        content: "لا، هذا لا يمكن أن يكون أنا"
      }
    ]
  },
  // question #2
  {
    question: 'أشعر بالملل بسهولة عند مناقشة المفاهيم المجردة',
    answers: [
      {
        // briggs, color, letter
        type: 'N,Green,C',
        content: 'نعم، هذا انا'
      },
      {
        type: ' ',
        content: 'ليس لدي فكره'
      },
      {
        type: 'N,Green,C,No',
        content: "لا، هذا لا يمكن أن يكون أنا"
      }
    ]
  },
  // question #3
  {
    question: 'أحب أن أجرب الأشياء بنفسي',
    answers: [
      {
        // briggs, color, letter
        type: 'S,Red,A',
        content: 'نعم، هذا انا'
      },
      {
        type: ' ',
        content: 'ليس لدي فكره'
      },
      {
        type: 'S,Red,A,No',
        content: "لا، هذا لا يمكن أن يكون أنا"
      }
    ]
  },
  // question #4
  {
    question: "أحب أن أعرف إلى أين أنا ذاهب قبل أن أغادر المنزل",
    answers: [
      {
        // briggs, color, letter
        type: 'J,Brown,D',
        content: 'نعم، هذا انا'
      },
      {
        type: ' ',
        content: 'ليس لدي فكره'
      },
      {
        type: 'J,Brown,D,No',
        content: "لا، هذا لا يمكن أن يكون أنا"
      }
    ]
  },
  // question #5
  {
    question: 'أعتقد أن هناك تفسيرًا منطقيًا لكل شيء',
    answers: [
      {
        // briggs, color, letter
        type: 'T,Brown,C',
        content: 'نعم، هذا انا'
      },
      {
        type: ' ',
        content: 'ليس لدي فكره'
      },
      {
        type: 'T,Brown,C,No',
        content: "لا، هذا لا يمكن أن يكون أنا"
      }
    ]
  },
  // question #6
  {
    question: 'أميل إلى إبقاء دائرتي الاجتماعية صغيرة',
    answers: [
      {
        // briggs, color, letter
        type: 'I,Green,C',
        content: 'نعم، هذا انا'
      },
      {
        type: ' ',
        content: 'ليس لدي فكره'
      },
      {
        type: 'I,Green,C,No',
        content: "لا، هذا لا يمكن أن يكون أنا"
      }
    ]
  },
  // question #7
  {
    question: 'أحب مشاركة أفكاري مع الآخرين',
    answers: [
      {
        // briggs, color, letter
        type: 'E,Blue,B',
        content: 'نعم، هذا انا'
      },
      {
        type: ' ',
        content: 'ليس لدي فكره'
      },
      {
        type: 'E,Blue,B,No',
        content: "لا، هذا لا يمكن أن يكون أنا"
      }
    ]
  },
  // question #8
  {
    question: 'أنا أستمتع باستخدام وسائل التواصل الاجتماعي',
    answers: [
      {
        // briggs, color, letter
        type: 'E,Blue,B',
        content: 'نعم، هذا انا'
      },
      {
        type: ' ',
        content: 'ليس لدي فكره'
      },
      {
        type: 'E,Blue,B,No',
        content: "لا، هذا لا يمكن أن يكون أنا"
      }
    ]
  },
  // question #9
  {
    question: 'أنا دائما أعبر عن قلقي للآخرين عند اتخاذ القرارات',
    answers: [
      {
        // briggs, color, letter
        type: 'F,Blue,B',
        content: 'نعم، هذا انا'
      },
      {
        type: ' ',
        content: 'ليس لدي فكره'
      },
      {
        type: 'F,Blue,B,No',
        content: "لا، هذا لا يمكن أن يكون أنا"
      }
    ]
  },
  // question #10
  {
    question: 'أحب تجربة الأشياء الجديدة',
    answers: [
      {
        // briggs, color, letter
        type: 'P,Red,A',
        content: 'نعم، هذا انا'
      },
      {
        type: ' ',
        content: 'ليس لدي فكره'
      },
      {
        type: 'P,Red,A,No',
        content: "لا، هذا لا يمكن أن يكون أنا"
      }
    ]
  },
  // question #11
  {
    question: 'يمكنني بسهولة التكيف مع التغيير في القرار',
    answers: [
      {
        // briggs, color, letter
        type: 'P,Red,A',
        content: 'نعم، هذا انا'
      },
      {
        type: ' ',
        content: 'ليس لدي فكره'
      },
      {
        type: 'P,Red,A,No',
        content: "لا، هذا لا يمكن أن يكون أنا"
      }
    ]
  },
  // question #12
  {
    question: 'أقوم بحل المشكلات من خلال العمل من خلال الحقائق حتى أفهم المشكلة',
    answers: [
      {
        // briggs, color, letter
        type: 'S,Brown,C',
        content: 'نعم، هذا انا'
      },
      {
        type: ' ',
        content: 'ليس لدي فكره'
      },
      {
        type: 'S,Brown,C,No',
        content: "لا، هذا لا يمكن أن يكون أنا"
      }
    ]
  },
  // question #13
  {
    question: 'أعتمد على المنطق بدلاً من الحدس عند اتخاذ القرار',
    answers: [
      {
        // briggs, color, letter
        type: 'T,Green,C',
        content: 'نعم، هذا انا'
      },
      {
        type: ' ',
        content: 'ليس لدي فكره'
      },
      {
        type: 'T,Green,C,No',
        content: "لا، هذا لا يمكن أن يكون أنا"
      }
    ]
  },
  // question #14
  {
    question: 'أنا أتخذ القرارات بقلبي',
    answers: [
      {
        // briggs, color, letter
        type: 'F,Blue,B',
        content: 'نعم، هذا انا'
      },
      {
        type: ' ',
        content: 'ليس لدي فكره'
      },
      {
        type: 'F,Blue,B,No',
        content: "لا، هذا لا يمكن أن يكون أنا"
      }
    ]
  },
  // question #15
  {
    question: 'أتعلم بشكل أفضل من خلال رؤية التعليمات خطوة بخطوة',
    answers: [
      {
        // briggs, color, letter
        type: 'S,Brown,D',
        content: 'نعم، هذا انا'
      },
      {
        type: ' ',
        content: 'ليس لدي فكره'
      },
      {
        type: 'S,Brown,D,No',
        content: "لا، هذا لا يمكن أن يكون أنا"
      }
    ]
  },
  // question #16
  {
    question: 'أنتقل أحيانًا إلى مهمة أخرى قبل إكمال مهمتي الحالية',
    answers: [
      {
        // briggs, color, letter
        type: 'P,Red,A',
        content: 'نعم، هذا انا'
      },
      {
        type: ' ',
        content: 'ليس لدي فكره'
      },
      {
        type: 'P,Red,A,No',
        content: "لا، هذا لا يمكن أن يكون أنا"
      }
    ]
  },
  // question #17
  {
    question: 'أفضل طريقة حياة مرنة وعفوية',
    answers: [
      {
        // briggs, color, letter
        type: 'P,Red,A',
        content: 'نعم، هذا انا'
      },
      {
        type: ' ',
        content: 'ليس لدي فكره'
      },
      {
        type: 'P,Red,A,No',
        content: "لا، هذا لا يمكن أن يكون أنا"
      }
    ]
  },
  // question #18
  {
    question: 'أحب أن أبقي خياراتي مفتوحة عند اتخاذ القرارات',
    answers: [
      {
        // briggs, color, letter
        type: 'P,Green,D',
        content: 'نعم، هذا انا'
      },
      {
        type: ' ',
        content: 'ليس لدي فكره'
      },
      {
        type: 'P,Green,D,No',
        content: "لا، هذا لا يمكن أن يكون أنا"
      }
    ]
  },
  // question #19
  {
    question: 'أشعر بالراحة في الحشود',
    answers: [
      {
        // briggs, color, letter
        type: 'E,Blue,B',
        content: 'نعم، هذا انا'
      },
      {
        type: ' ',
        content: 'ليس لدي فكره'
      },
      {
        type: 'E,Blue,B,No',
        content: "لا، هذا لا يمكن أن يكون أنا"
      }
    ]
  },
  // question #20
  {
    question: 'أحب مشاركة مشاعري مع الآخرين',
    answers: [
      {
        // briggs, color, letter
        type: 'E,Blue,B',
        content: 'نعم، هذا انا'
      },
      {
        type: ' ',
        content: 'ليس لدي فكره'
      },
      {
        type: 'E,Blue,B,No',
        content: "لا، هذا لا يمكن أن يكون أنا"
      }
    ]
  },
  // question #21
  {
    question: 'أفضل أن أبدأ العمل على الفور بدلاً من قضاء الوقت في وضع خطة',
    answers: [
      {
        // briggs, color, letter
        type: 'S,Brown,A',
        content: 'نعم، هذا انا'
      },
      {
        type: ' ',
        content: 'ليس لدي فكره'
      },
      {
        type: 'S,Brown,A,No',
        content: "لا، هذا لا يمكن أن يكون أنا"
      }
    ]
  },
  // question #22
  {
    question: 'أنا أعرف أولوياتي',
    answers: [
      {
        // briggs, color, letter
        type: 'S,Brown,A',
        content: 'نعم، هذا انا'
      },
      {
        type: ' ',
        content: 'ليس لدي فكره'
      },
      {
        type: 'S,Brown,A,No',
        content: "لا، هذا لا يمكن أن يكون أنا"
      }
    ]
  },
  // question #23
  {
    question: 'أنا أعرف أولوياتي',
    answers: [
      {
        // briggs, color, letter
        type: 'I,Green,D',
        content: 'نعم، هذا انا'
      },
      {
        type: ' ',
        content: 'ليس لدي فكره'
      },
      {
        type: 'I,Green,D,No',
        content: "لا، هذا لا يمكن أن يكون أنا"
      }
    ]
  },
  // question #24
  {
    question: "لا احب الذهاب الى الحفلات",
    answers: [
      {
        // briggs, color, letter
        type: 'I,Green,C',
        content: 'نعم، هذا انا'
      },
      {
        type: ' ',
        content: 'ليس لدي فكره'
      },
      {
        type: 'I,Green,C,No',
        content: "لا، هذا لا يمكن أن يكون أنا"
      }
    ]
  },
  // question #25
  {
    question: 'أنا في تناغم مع مشاعري وأدعهم يرشدونني في الحياة',
    answers: [
      {
        // briggs, color, letter
        type: 'F,Blue,B',
        content: 'نعم، هذا انا'
      },
      {
        type: ' ',
        content: 'ليس لدي فكره'
      },
      {
        type: 'F,Blue,B,No',
        content: "لا، هذا لا يمكن أن يكون أنا"
      }
    ]
  },
  // question #26
  {
    question: 'أنا أعتمد على حدسي وخبرتي أكثر من الحقائق',
    answers: [
      {
        // briggs, color, letter
        type: 'N,Red,A',
        content: 'نعم، هذا انا'
      },
      {
        type: ' ',
        content: 'ليس لدي فكره'
      },
      {
        type: 'N,Red,A,No',
        content: "لا، هذا لا يمكن أن يكون أنا"
      }
    ]
  },
  // question #27
  {
    question: 'أحب أن أفكر في الأشياء',
    answers: [
      {
        // briggs, color, letter
        type: 'T,Green,D',
        content: 'نعم، هذا انا'
      },
      {
        type: ' ',
        content: 'ليس لدي فكره'
      },
      {
        type: 'T,Green,D,No',
        content: "لا، هذا لا يمكن أن يكون أنا"
      }
    ]
  },
  // question #28
  {
    question: 'أنا متعلم بصري',
    answers: [
      {
        // briggs, color, letter
        type: 'S,Red,A',
        content: 'نعم، هذا انا'
      },
      {
        type: ' ',
        content: 'ليس لدي فكره'
      },
      {
        type: 'S,Red,A,No',
        content: "لا، هذا لا يمكن أن يكون أنا"
      }
    ]
  },
  // question #29
  {
    question: 'أفكر مليًا قبل اتخاذ القرارات',
    answers: [
      {
        // briggs, color, letter
        type: 'J,Brown,D',
        content: 'نعم، هذا انا'
      },
      {
        type: ' ',
        content: 'ليس لدي فكره'
      },
      {
        type: 'J,Brown,D,No',
        content: "لا، هذا لا يمكن أن يكون أنا"
      }
    ]
  },
  // question #30
  {
    question: 'أشعر بعدم الارتياح إذا أدت أفعالي إلى تعطيل الانسجام في دائرتي الاجتماعية',
    answers: [
      {
        // briggs, color, letter
        type: 'F,Blue,B',
        content: 'نعم، هذا انا'
      },
      {
        type: ' ',
        content: 'ليس لدي فكره'
      },
      {
        type: 'F,Blue,B,No',
        content: "لا، هذا لا يمكن أن يكون أنا"
      }
    ]
  },
  // question #31
  {
    question: 'أضع آرائي الشخصية جانبا في السعي لتحقيق الإنصاف والعدالة',
    answers: [
      {
        // briggs, color, letter
        type: 'T,Brown,C',
        content: 'نعم، هذا انا'
      },
      {
        type: ' ',
        content: 'ليس لدي فكره'
      },
      {
        type: 'T,Brown,C,No',
        content: "لا، هذا لا يمكن أن يكون أنا"
      }
    ]
  },
  // question #32
  {
    question: 'أميل إلى الجلوس في الخلف أو الزاوية من الفصل',
    answers: [
      {
        // briggs, color, letter
        type: 'I,Green,C',
        content: 'نعم، هذا انا'
      },
      {
        type: ' ',
        content: 'ليس لدي فكره'
      },
      {
        type: 'I,Green,C,No',
        content: "لا، هذا لا يمكن أن يكون أنا"
      }
    ]
  },
  // question #33
  {
    question: 'أحب أن أكون مركز الاهتمام',
    answers: [
      {
        // briggs, color, letter
        type: 'E,Red,B',
        content: 'نعم، هذا انا'
      },
      {
        type: ' ',
        content: 'ليس لدي فكره'
      },
      {
        type: 'E,Red,B,No',
        content: "لا، هذا لا يمكن أن يكون أنا"
      }
    ]
  },
  // question #34
  {
    question: 'أقوم بحل المشكلات من خلال التفكير بين الافتراضات والاحتمالات المختلفة',
    answers: [
      {
        // briggs, color, letter
        type: 'N,Green,C',
        content: 'نعم، هذا انا'
      },
      {
        type: ' ',
        content: 'ليس لدي فكره'
      },
      {
        type: 'N,Green,C,No',
        content: "لا، هذا لا يمكن أن يكون أنا"
      }
    ]
  },
  // question #35
  {
    question: 'أحب أن أكمل عملي قبل اللعب',
    answers: [
      {
        // briggs, color, letter
        type: 'J,Red,D',
        content: 'نعم، هذا انا'
      },
      {
        type: ' ',
        content: 'ليس لدي فكره'
      },
      {
        type: 'J,Red,D,No',
        content: "لا، هذا لا يمكن أن يكون أنا"
      }
    ]
  },
  // question #36
  {
    question: "لا أسمح للآخرين بالتأثير على أفكاري أو أفعالي",
    answers: [
      {
        // briggs, color, letter
        type: 'T,Red,A',
        content: 'نعم، هذا انا'
      },
      {
        type: ' ',
        content: 'ليس لدي فكره'
      },
      {
        type: 'T,Red,A,No',
        content: "لا، هذا لا يمكن أن يكون أنا"
      }
    ]
  },
  // question #37
  {
    question: 'يمكنني استخدام حاسة الشم للمساعدة في تذكر الذكريات',
    answers: [
      {
        // briggs, color, letter
        type: 'N,Blue,D',
        content: 'نعم، هذا انا'
      },
      {
        type: ' ',
        content: 'ليس لدي فكره'
      },
      {
        type: 'N,Blue,D,No',
        content: "لا، هذا لا يمكن أن يكون أنا"
      }
    ]
  },
  // question #38
  {
    question: 'أنا أتخذ القرارات بناءً على مشاعري',
    answers: [
      {
        // briggs, color, letter
        type: 'F,Blue,B',
        content: 'نعم، هذا انا'
      },
      {
        type: ' ',
        content: 'ليس لدي فكره'
      },
      {
        type: 'F,Blue,B,No',
        content: "لا، هذا لا يمكن أن يكون أنا"
      }
    ]
  },
  // question #39
  {
    question: 'أحتاج إلى وقت بمفردي لإعادة شحن طاقتي',
    answers: [
      {
        // briggs, color, letter
        type: 'I,Green,C',
        content: 'نعم، هذا انا'
      },
      {
        type: ' ',
        content: 'ليس لدي فكره'
      },
      {
        type: 'I,Green,C,No',
        content: "لا، هذا لا يمكن أن يكون أنا"
      }
    ]
  },
  // question #40
  {
    question: 'أحب أن أبقي غرفتي منظمة ونظيفة',
    answers: [
      {
        // briggs, color, letter
        type: 'J,Brown,D',
        content: 'نعم، هذا انا'
      },
      {
        type: ' ',
        content: 'ليس لدي فكره'
      },
      {
        type: 'J,Brown,D,No',
        content: "لا، هذا لا يمكن أن يكون أنا"
      }
    ]
  }
]

export default quizQuestions
