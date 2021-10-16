import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from '../utils/ResultWrapper'
import {
  ISTJ,
  ISFJ,
  INFJ,
  INTJ,
  ISTP,
  ISFP,
  INFP,
  INTP,
  ESTP,
  ESFP,
  ENFP,
  ENTP,
  ESTJ,
  ESFJ,
  ENFJ,
  ENTJ
} from '../definitions/BriggsDef'

class Briggs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showISTJ: false,
      showISFJ: false,
      showINFJ: false,
      showINTJ: false,
      showISTP: false,
      showISFP: false,
      showINFP: false,
      showINTP: false,
      showESTP: false,
      showESFP: false,
      showENFP: false,
      showENTP: false,
      showESTJ: false,
      showESFJ: false,
      showENFJ: false,
      showENTJ: false
    }
    this.onISTJ_click = this.onISTJ_click.bind(this)
    this.onISFJ_click = this.onISFJ_click.bind(this)
    this.onINFJ_click = this.onINFJ_click.bind(this)
    this.onINTJ_click = this.onINTJ_click.bind(this)
    this.onISTP_click = this.onISTP_click.bind(this)
    this.onISFP_click = this.onISFP_click.bind(this)
    this.onINFP_click = this.onINFP_click.bind(this)
    this.onINTP_click = this.onINTP_click.bind(this)
    this.onESTP_click = this.onESTP_click.bind(this)
    this.onESFP_click = this.onESFP_click.bind(this)
    this.onENFP_click = this.onENFP_click.bind(this)
    this.onENTP_click = this.onENTP_click.bind(this)
    this.onESTJ_click = this.onESTJ_click.bind(this)
    this.onESFJ_click = this.onESFJ_click.bind(this)
    this.onENFJ_click = this.onENFJ_click.bind(this)
    this.onENTJ_click = this.onENTJ_click.bind(this)
  }

  renderISTJ() {
    return (
      <ISTJ
        title={'انطوائي | الاستشعار | التفكير | الحكم'}
        content={`أنت من النوع ISTJ ، ويعرف أيضًا باسم المفتش. أنت تميل إلى أن تكون عمليًا ومنطقيًا قبل كل شيء. يجب أن تفكر في وظيفة في المحاسبة أو الهندسة.`}
        onBackClick={this.onISTJ_click}
      />
    )
  }

  renderISFJ() {
    return (
      <ISFJ
        title={'انطوائي | الاستشعار | الشعور | الحكم'}
        content={`أنت من النوع ISFJ \n ويعرف أيضًا باسم الحامي.
                   أنت تميل إلى التعاطف والتنظيم قبل كل شيء.
                   يجب أن تفكر في وظيفة في رعاية الأطفال أو مسك الدفاتر`}
        onBackClick={this.onISFJ_click}
      />
    )
  }

  renderINFJ() {
    return (
      <INFJ
        title={'انطوائي | حدسي | الشعور | الحكم'}
        content={`أنت من نوع INFJ \n ويعرف أيضًا باسم المستشار.
                 أنت تميل إلى أن تكون حساسًا ومبدعًا قبل كل شيء.
                 يجب أن تفكر في وظيفة في التعليم أو الفنون`}
        onBackClick={this.onINFJ_click}
      />
    )
  }

  renderINTJ() {
    return (
      <INTJ
        title={'انطوائي | حدسي | التفكير | الحكم'}
        content={`أنت من النوع INTJ \n ويعرف أيضًا باسم العقل المدبر.
                       أنت تميل إلى أن تكون حاسمًا وبصيرًا قبل كل شيء.
                       يجب أن تفكر في وظيفة في الهندسة المعمارية أو الهندسة`}
        onBackClick={this.onINTJ_click}
      />
    )
  }

  renderISTP() {
    return (
      <ISTP
        title={'انطوائي | الاستشعار | التفكير | الإدراك'}
        content={`أنت من النوع ISTP \n ويعرف أيضًا باسم المشغل.
                   أنت تميل إلى أن تكون تحليليًا وعمليًا قبل كل شيء.
                   يجب أن تفكر في وظيفة في تكنولوجيا الكمبيوتر أو الزراعة`}
        onBackClick={this.onISTP_click}
      />
    )
  }

  renderISFP() {
    return (
      <ISFP
        title={'انطوائي | الاستشعار | الشعور | الإدراك'}
        content={`أنت من النوع ISFP \n ويعرف أيضًا باسم الملحن.
                   أنت تميل إلى أن تكون مخلصًا وقادرًا على التكيف قبل كل شيء.
                   يجب أن تفكر في وظيفة في التدريس أو التمريض`}
        onBackClick={this.onISFP_click}
      />
    )
  }

  renderINFP() {
    return (
      <INFP
        title={'انطوائي | حدسي | الشعور | الإدراك'}
        content={`أنت من النوع INFP \n ويعرف أيضًا باسم المعالج.
                   أنت تميل إلى أن تكون متعاطفًا وفضوليًا قبل كل شيء.
                   يجب أن تفكر في وظيفة في الكتابة أو التصميم الجرافيكي`}
        onBackClick={this.onINFP_click}
      />
    )
  }

  renderINTP() {
    return (
      <INTP
        title={'انطوائي | حدسي | التفكير | الإدراك'}
        content={`أنت من النوع INTP \n ويعرف أيضًا باسم المهندس المعماري.
                   أنت تميل إلى أن تكون فضوليًا وتحليليًا قبل كل شيء.
                   يجب أن تفكر في وظيفة في الهندسة المعمارية أو البناء`}
        onBackClick={this.onINTP_click}
      />
    )
  }

  renderESTP() {
    return (
      <ESTP
        title={'منفتح  | الاستشعار | التفكير | الإدراك'}
        content={`أنت من النوع ESTP \n ويعرف أيضًا باسم المروج.
                    أنت تميل إلى أن تكون نشطًا وواقعيًا قبل كل شيء.
                    يجب أن تفكر في وظيفة في المبيعات أو الغابات`}
        onBackClick={this.onESTP_click}
      />
    )
  }

  renderESFP() {
    return (
      <ESFP
        title={'منفتح | الاستشعار | الشعور | الإدراك'}
        content={`أنت من النوع ESFP \n ويعرف أيضًا باسم المؤدي.
                   أنت تميل إلى الاهتمام والحيلة قبل كل شيء.
                   يجب أن تفكر في وظيفة في مجال الضيافة أو الرعاية الصحية`}
        onBackClick={this.onESFP_click}
      />
    )
  }

  renderENFP() {
    return (
      <ENFP
        title={'منفتح | حدسي | الشعور | الإدراك'}
        content={`أنت من النوع ENFP \n ويعرف أيضًا باسم البطل.
                   أنت تميل إلى أن تكون مبدعًا وبصيرًا قبل كل شيء.
                   يجب أن تفكر في وظيفة في العلاج أو التمثيل`}
        onBackClick={this.onENFP_click}
      />
    )
  }

  renderENTP() {
    return (
      <ENTP
        title={'منفتح | حدسي | التفكير | الإدراك'}
        content={`أنت من نوع ENTP \n ويعرف أيضًا باسم المخترع.
                   أنت تميل إلى أن تكون متحمسًا ونظريًا قبل كل شيء.
                   يجب أن تفكر في وظيفة في مجال الأعمال أو الرياضة`}
        onBackClick={this.onENTP_click}
      />
    )
  }

  renderESTJ() {
    return (
      <ESTJ
        title={'منفتح | الاستشعار | التفكير | الحكم'}
        content={`أنت من النوع ESTJ \n ويعرف أيضًا باسم المشرف.
                    أنت تميل إلى أن تكون منطقيًا وحازمًا قبل كل شيء.
                    يجب أن تفكر في وظيفة في القيادة أو القانون`}
        onBackClick={this.onESTJ_click}
      />
    )
  }

  renderESFJ() {
    return (
      <ESFJ
        title={'منفتح | الاستشعار | الشعور | الحكم'}
        content={`أنت من النوع ESFJ \n ويعرف أيضًا باسم المزود.
                    أنت تميل إلى أن تكون اجتماعيًا وتهتم قبل كل شيء.
                    يجب أن تفكر في وظيفة في رعاية الأطفال أو الرعاية الصحية`}
        onBackClick={this.onESFJ_click}
      />
    )
  }

  renderENFJ() {
    return (
      <ENFJ
        title={'منفتح | حدسي | الشعور | الحكم'}
        content={`أنت من النوع ENFJ \n ويعرف أيضًا باسم المعلم.
                    أنت تميل إلى أن تكون عاطفيًا وخياليًا قبل كل شيء.
                    يجب أن تفكر في وظيفة في التدريس أو الفنون.`}
        onBackClick={this.onENFJ_click}
      />
    )
  }

  renderENTJ() {
    return (
      <ENTJ
        title={'منفتح | حدسي | التفكير | الحكم'}
        content={`أنت ENTJ \n ويعرف أيضًا باسم الجنرال 
                     أنت تميل إلى أن تكون منظمًا ومنطقيًا قبل كل شيء.
                     يجب أن تفكر في الحصول على وظيفة في القانون أو الهندسة`}
        onBackClick={this.onENTJ_click}
      />
    )
  }

  render() {
    let showISTJ = this.state.showISTJ
    let showISFJ = this.state.showISFJ
    let showINFJ = this.state.showINFJ
    let showINTJ = this.state.showINTJ
    let showISTP = this.state.showISTP
    let showISFP = this.state.showISFP
    let showINFP = this.state.showINFP
    let showINTP = this.state.showINTP
    let showESTP = this.state.showESTP
    let showESFP = this.state.showESFP
    let showENFP = this.state.showENFP
    let showENTP = this.state.showENTP
    let showESTJ = this.state.showESTJ
    let showESFJ = this.state.showESFJ
    let showENFJ = this.state.showENFJ
    let showENTJ = this.state.showENTJ
    if (showISTJ) {
      return this.renderISTJ()
    } else if (showISFJ) {
      return this.renderISFJ()
    } else if (showINFJ) {
      return this.renderINFJ()
    } else if (showINTJ) {
      return this.renderINTJ()
    } else if (showISTP) {
      return this.renderISTP()
    } else if (showISFP) {
      return this.renderISFP()
    } else if (showINFP) {
      return this.renderINFP()
    } else if (showINTP) {
      return this.renderINTP()
    } else if (showESTP) {
      return this.renderESTP()
    } else if (showESFP) {
      return this.renderESFP()
    } else if (showENFP) {
      return this.renderENFP()
    } else if (showENTP) {
      return this.renderENTP()
    } else if (showESTJ) {
      return this.renderESTJ()
    } else if (showESFJ) {
      return this.renderESFJ()
    } else if (showENFJ) {
      return this.renderENFJ()
    } else if (showENTJ) {
      return this.renderENTJ()
    }
    return (
      <Wrapper>
        <h1 className="display-3 title">نتيجة الشخصية</h1>
        <hr className="my-4" />
        <h2 className="display-6 resultTxt">{this.props.resultBriggs}</h2>
        <hr className="my-5" />
        <p className="lead">ماذا تعني هذه النتيجة؟</p>
        <ul className="list-group briggs">
          <li className="list-group-item" onClick={this.onISTJ_click}>
            ISTJ
          </li>
          <li className="list-group-item" onClick={this.onISFJ_click}>
            ISFJ
          </li>
          <li className="list-group-item" onClick={this.onINFJ_click}>
            INFJ
          </li>
          <li className="list-group-item" onClick={this.onINTJ_click}>
            INTJ
          </li>
        </ul>
        <ul className="list-group briggs">
          <li className="list-group-item" onClick={this.onISTP_click}>
            ISTP
          </li>
          <li className="list-group-item" onClick={this.onISFP_click}>
            ISFP
          </li>
          <li className="list-group-item" onClick={this.onINFP_click}>
            INFP
          </li>
          <li className="list-group-item" onClick={this.onINTP_click}>
            INTP
          </li>
        </ul>
        <ul className="list-group briggs">
          <li className="list-group-item" onClick={this.onESTP_click}>
            ESTP
          </li>
          <li className="list-group-item" onClick={this.onESFP_click}>
            ESFP
          </li>
          <li className="list-group-item" onClick={this.onENFP_click}>
            ENFP
          </li>
          <li className="list-group-item" onClick={this.onENTP_click}>
            ENTP
          </li>
        </ul>
        <ul className="list-group briggs">
          <li className="list-group-item" onClick={this.onESTJ_click}>
            ESTJ
          </li>
          <li className="list-group-item" onClick={this.onESFJ_click}>
            ESFJ
          </li>
          <li className="list-group-item" onClick={this.onENFJ_click}>
            ENFJ
          </li>
          <li className="list-group-item" onClick={this.onENTJ_click}>
            ENTJ
          </li>
        </ul>
      </Wrapper>
    )
  }

  onISTJ_click() {
    let showISTJ = this.state.showISTJ
    this.setState({ showISTJ: !showISTJ })
  }

  onISFJ_click() {
    let showISFJ = this.state.showISFJ
    this.setState({ showISFJ: !showISFJ })
  }

  onINFJ_click() {
    let showINFJ = this.state.showINFJ
    this.setState({ showINFJ: !showINFJ })
  }

  onINTJ_click() {
    let showINTJ = this.state.showINTJ
    this.setState({ showINTJ: !showINTJ })
  }

  onISTP_click() {
    let showISTP = this.state.showISTP
    this.setState({ showISTP: !showISTP })
  }

  onISFP_click() {
    let showISFP = this.state.showISFP
    this.setState({ showISFP: !showISFP })
  }

  onINFP_click() {
    let showINFP = this.state.showINFP
    this.setState({ showINFP: !showINFP })
  }

  onINTP_click() {
    let showINTP = this.state.showINTP
    this.setState({ showINTP: !showINTP })
  }

  onESTP_click() {
    let showESTP = this.state.showESTP
    this.setState({ showESTP: !showESTP })
  }

  onESFP_click() {
    let showESFP = this.state.showESFP
    this.setState({ showESFP: !showESFP })
  }

  onENFP_click() {
    let showENFP = this.state.showENFP
    this.setState({ showENFP: !showENFP })
  }

  onENTP_click() {
    let showENTP = this.state.showENTP
    this.setState({ showENTP: !showENTP })
  }

  onESTJ_click() {
    let showESTJ = this.state.showESTJ
    this.setState({ showESTJ: !showESTJ })
  }

  onESFJ_click() {
    let showESFJ = this.state.showESFJ
    this.setState({ showESFJ: !showESFJ })
  }

  onENFJ_click() {
    let showENFJ = this.state.showENFJ
    this.setState({ showENFJ: !showENFJ })
  }

  onENTJ_click() {
    let showENTJ = this.state.showENTJ
    this.setState({ showENTJ: !showENTJ })
  }
}

Briggs.PropTypes = {
  resultBriggs: PropTypes.string.isRequired
}

export default Briggs
