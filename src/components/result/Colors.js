import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrownDef, GreenDef, BlueDef, RedDef } from '../definitions/ColorsDef'
import { Wrapper } from '../utils/ResultWrapper'
import { Btn } from '../utils/Buttons'

class Colors extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showBrownDef: false,
      showGreenDef: false,
      showBlueDef: false,
      showRedDef: false
    }
    this.onBrownDefClick = this.onBrownDefClick.bind(this)
    this.onGreenDefClick = this.onGreenDefClick.bind(this)
    this.onBlueDefClick = this.onBlueDefClick.bind(this)
    this.onRedDefClick = this.onRedDefClick.bind(this)
  }

  renderBtn() {
    return (
      <Btn onClick={this.props._onClick}>
        <span></span>
        <div className="icon">
          <i className="fa fa-chevron-right" />
        </div>
      </Btn>
    )
  }

  renderBrownDef() {
    return (
      <BrownDef
        title={'النوع البني'}
        content={`أنت منشئ. تستمتع بالقيادة والإبداع والعمل الجاد.
                   أنت شخص تقليدي يحترم السلطة.
                   نقاط قوتك هي اجتهادك ومباشرتك وعمليتك.
                   نقاط ضعفك هي افتقارك إلى اللباقة والصبر والصعوبة في التجريد.`}
        onBackClick={this.onBrownDefClick}
      />
    )
  }

  renderGreenDef() {
    return (
      <GreenDef
        title={'النوع الأخضر'}
        content={`أنت مخطط. تستمتع بالحلم والتخطيط والابتكار.
                   أنت تميل إلى قضاء الكثير من الوقت في التفكير.
                   نقاط قوتك هي رؤيتك وموضوعيتك واهتمامك بالتفاصيل.
                   نقاط ضعفك هي الصعوبة في وضع نفسك في اللحظة الحالية وقلة التطبيق العملي والسرعة.`}
        onBackClick={this.onGreenDefClick}
      />
    )
  }

  renderBlueDef() {
    return (
      <BlueDef
        title={'النوع الأزرق'}
        content={`أنت متعلق. تستمتع بالدردشة والرومانسية وقضاء الوقت مع الآخرين.
                 أنت شخص متعاطف تميل إلى وضع احتياجات الآخرين فوق احتياجاتك.
                 نقاط قوتك هي تعاطفك وانفتاحك ووعيك بمشاعرك.
                 نقاط ضعفك هي ذاتيتك والمرونة والقدرة على التلاعب.`}
        onBackClick={this.onBlueDefClick}
      />
    )
  }

  renderRedDef() {
    return (
      <RedDef
        title={'النوع الأحمر'}
        content={`أنت مغامر. تستمتع بالحركة والإثارة والدراما.
                   أنت تقبل التغيير بسهولة وتكون عفويًا.
                   نقاط قوتك هي مثابرتك وخوفك وقدرتك على التكيف.
                   نقاط ضعفك هي إهمالك وقلة التركيز والاجتهاد.`}
        onBackClick={this.onRedDefClick}
      />
    )
  }

  render() {
    let showBrownDef = this.state.showBrownDef
    let showGreenDef = this.state.showGreenDef
    let showBlueDef = this.state.showBlueDef
    let showRedDef = this.state.showRedDef
    if (showBrownDef) {
      return this.renderBrownDef()
    } else if (showGreenDef) {
      return this.renderGreenDef()
    } else if (showBlueDef) {
      return this.renderBlueDef()
    } else if (showRedDef) {
      return this.renderRedDef()
    }
    return (
      <Wrapper className="jumbotron">
        <h1 className="display-3 title">نتيجة الألوان</h1>
        <hr className="my-4" />
        <h2 className="display-6 resultTxt">{this.props.resultColors}</h2>
        <hr className="my-5" />
        <p className="lead">ماذا تعني هذه النتيجة؟</p>
        <ul className="list-group">
          <li className="list-group-item" onClick={this.onBrownDefClick}>
            Brown
            <div className="icon">
              <i className="fa fa-arrow-right" />
            </div>
          </li>
          <li className="list-group-item" onClick={this.onGreenDefClick}>
            Green
            <div className="icon">
              <i className="fa fa-arrow-right" />
            </div>
          </li>
          <li className="list-group-item" onClick={this.onBlueDefClick}>
            Blue
            <div className="icon">
              <i className="fa fa-arrow-right" />
            </div>
          </li>
          <li className="list-group-item" onClick={this.onRedDefClick}>
            Red
            <div className="icon">
              <i className="fa fa-arrow-right" />
            </div>
          </li>
        </ul>
        {this.renderBtn()}
      </Wrapper>
    )
  }

  onBrownDefClick() {
    let showBrownDef = this.state.showBrownDef
    this.setState({ showBrownDef: !showBrownDef })
  }

  onGreenDefClick() {
    let showGreenDef = this.state.showGreenDef
    this.setState({ showGreenDef: !showGreenDef })
  }

  onBlueDefClick() {
    let showBlueDef = this.state.showBlueDef
    this.setState({ showBlueDef: !showBlueDef })
  }

  onRedDefClick() {
    let showRedDef = this.state.showRedDef
    this.setState({ showRedDef: !showRedDef })
  }
}

Colors.PropTypes = {
  resultColors: PropTypes.string.isRequired,
  resultBrown: PropTypes.string.isRequired,
  resultGreen: PropTypes.string.isRequired,
  resultBlue: PropTypes.string.isRequired,
  resultRed: PropTypes.string.isRequired
}

export default Colors
