import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from '../utils/ResultWrapper'
import { LetterA, LetterB, LetterC, LetterD } from '../definitions/LettersDef'
import { Btn } from '../utils/Buttons'

class Letters extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showLetterA: false,
      showLetterB: false,
      showLetterC: false,
      showLetterD: false
    }
    this.onLetterA_Click = this.onLetterA_Click.bind(this)
    this.onLetterB_Click = this.onLetterB_Click.bind(this)
    this.onLetterC_Click = this.onLetterC_Click.bind(this)
    this.onLetterD_Click = this.onLetterD_Click.bind(this)
  }

  renderBtn() {
    return (
      <Btn onClick={this.props._onClick}>
        <span>التالي</span>
        <div className="icon">
          <i className="fa fa-chevron-right" />
        </div>
      </Btn>
    )
  }

  renderLetterA() {
    return (
      <LetterA
        title={'تعريف الحرف A'}
        content={`أنت شخصية من النوع أ. تحب أن تكون متحكمًا في كل شيء.
                 نقاط قوتك هي مثابرتك وثقتك وعمليتك.
                 نقاط ضعفك هي افتقارك إلى التعاطف والانضباط والوعي بالتفاصيل`}
        onBackClick={this.onLetterA_Click}
      />
    )
  }

  renderLetterB() {
    return (
      <LetterB
        title={'تعريف الحرف B'}
        content={`أنت شخصية من النوع ب. تحب أن تكون حول الناس.
                 نقاط قوتك هي التعاطف والحماس والعفوية.
                 نقاط ضعفك هي قلة الصبر والاهتمام والثقة`}
        onBackClick={this.onLetterB_Click}
      />
    )
  }

  renderLetterC() {
    return (
      <LetterC
        title={'تعريف الحرف C'}
        content={`أنت شخصية من النوع ج. أنت تحب التفكير في الأمور.
                 نقاط قوتك هي العقلانية والموضوعية والأصالة.
                 نقاط ضعفك هي افتقارك إلى العفوية والتطبيق العملي والتعاطف`}
        onBackClick={this.onLetterC_Click}
      />
    )
  }

  renderLetterD() {
    return (
      <LetterD
        title={'تعريف الحرف D'}
        content={`أنت شخصية من النوع د. تحب أن تشعر بالأمان والأمان في الحياة.
                    نقاط قوتك هي منظمتك والتعاطف والصبر.
                    نقاط ضعفك هي افتقارك إلى الطموح والقدرة على التكيف والحزم`}
        onBackClick={this.onLetterD_Click}
      />
    )
  }

  render() {
    let showLetterA = this.state.showLetterA
    let showLetterB = this.state.showLetterB
    let showLetterC = this.state.showLetterC
    let showLetterD = this.state.showLetterD
    if (showLetterA) {
      return this.renderLetterA()
    } else if (showLetterB) {
      return this.renderLetterB()
    } else if (showLetterC) {
      return this.renderLetterC()
    } else if (showLetterD) {
      return this.renderLetterD()
    }
    return (
      <Wrapper>
        <h1 className="display-3 title">نتيجة الحروف</h1>
        <hr className="my-4" />
        <h2 className="display-6 resultTxt">{this.props.resultLetters}</h2>
        <hr className="my-5" />
        <p className="lead">ماذا تعني هذه النتيجة؟</p>
        <ul className="list-group">
          <li className="list-group-item" onClick={this.onLetterA_Click}>
           الحرف A
            <div className="icon">
              <i className="fa fa-arrow-right" />
            </div>
          </li>
          <li className="list-group-item" onClick={this.onLetterB_Click}>
            الحرف B
            <div className="icon">
              <i className="fa fa-arrow-right" />
            </div>
          </li>
          <li className="list-group-item" onClick={this.onLetterC_Click}>
            الحرف C
            <div className="icon">
              <i className="fa fa-arrow-right" />
            </div>
          </li>
          <li className="list-group-item" onClick={this.onLetterD_Click}>
            الحرف D
            <div className="icon">
              <i className="fa fa-arrow-right" />
            </div>
          </li>
        </ul>
        {this.renderBtn()}
      </Wrapper>
    )
  }

  onLetterA_Click() {
    let showLetterA = this.state.showLetterA
    this.setState({ showLetterA: !showLetterA })
  }

  onLetterB_Click() {
    let showLetterB = this.state.showLetterB
    this.setState({ showLetterB: !showLetterB })
  }

  onLetterC_Click() {
    let showLetterC = this.state.showLetterC
    this.setState({ showLetterC: !showLetterC })
  }

  onLetterD_Click() {
    let showLetterD = this.state.showLetterD
    this.setState({ showLetterD: !showLetterD })
  }
}

Letters.PropTypes = {
  resultLetters: PropTypes.string.isRequired
}

export default Letters
