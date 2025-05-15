import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { Divider } from '@alfalab/core-components/divider';
import { Gap } from '@alfalab/core-components/gap';
import { Grid } from '@alfalab/core-components/grid';
import { List } from '@alfalab/core-components/list';
import { PureCell } from '@alfalab/core-components/pure-cell';
import { Typography } from '@alfalab/core-components/typography';
import { HeartMIcon } from '@alfalab/icons-glyph/HeartMIcon';
import { InformationCircleMIcon } from '@alfalab/icons-glyph/InformationCircleMIcon';
import { useEffect, useState } from 'react';
import polusImg from './assets/polus.png';
import { LS, LSKeys } from './ls';
import { appSt } from './style.css';

const sduiLink =
  'alfabank://sdui_screen?screenName=InvestmentLongread&fromCurrent=true&endpoint=v1/invest-main-screen-view/investment-longread/52456%3flocation=AM%26campaignCode=GH';
const sduiLink2 =
  'alfabank://sdui_screen?screenName=InvestmentLongread&fromCurrent=true&endpoint=v1/invest-main-screen-view/investment-longread/52455%3flocation=AM%26campaignCode=GH';

export const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!LS.getItem(LSKeys.UserId, null)) {
      LS.setItem(LSKeys.UserId, Date.now());
    }
  }, []);

  const submitWith = () => {
    window.gtag('event', '5182_buy1_var5');
    setLoading(true);
    window.location.replace(sduiLink);
  };
  const submitWithout = () => {
    window.gtag('event', '5182_buy2_var5');

    setLoading(true);
    window.location.replace(sduiLink2);
  };

  return (
    <>
      <div className={appSt.container}>
        <PureCell style={{ marginTop: '1rem' }}>
          <PureCell.Graphics verticalAlign="center">
            <img src={polusImg} width={48} height={48} />
          </PureCell.Graphics>
          <PureCell.Content>
            <PureCell.Main>
              <Typography.Text view="primary-medium" tag="p" defaultMargins={false}>
                Полюс Золото
              </Typography.Text>
              <Typography.Text view="primary-small" tag="p" color="secondary" defaultMargins={false}>
                От 23 мая 2025
              </Typography.Text>
            </PureCell.Main>
          </PureCell.Content>
          <PureCell.Graphics verticalAlign="center">
            <HeartMIcon color="#C1C1C3" />
          </PureCell.Graphics>
        </PureCell>
      </div>

      <div className={appSt.container} style={{ backgroundColor: '#fff' }}>
        <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h1" view="small" font="system" weight="semibold">
          Что мы прогнозируем
        </Typography.TitleResponsive>

        <div className={appSt.row}>
          <Typography.TitleResponsive tag="h2" view="large" font="system" weight="medium">
            +11.75%
          </Typography.TitleResponsive>
          <Typography.Text style={{ marginBottom: '4px' }} view="secondary-large" tag="p" defaultMargins={false}>
            за 4–6 месяцев
          </Typography.Text>
        </div>

        <Grid.Row>
          <Grid.Col width="6">
            <Typography.Text view="primary-small" color="secondary" tag="p" defaultMargins={false}>
              Цена сейчас
            </Typography.Text>
            <Typography.TitleResponsive tag="h2" view="xsmall" font="system" weight="semibold">
              1 695,6 ₽
            </Typography.TitleResponsive>
          </Grid.Col>
          <Grid.Col width="6">
            <Typography.Text view="primary-small" color="secondary" tag="p" defaultMargins={false}>
              Направление
            </Typography.Text>
            <Typography.TitleResponsive tag="h2" view="xsmall" font="system" weight="semibold">
              На рост
            </Typography.TitleResponsive>
          </Grid.Col>
        </Grid.Row>

        <Grid.Row>
          <Grid.Col width="6">
            <Typography.Text view="primary-small" color="secondary" tag="p" defaultMargins={false}>
              Цена входа
            </Typography.Text>
            <Typography.TitleResponsive tag="h2" view="xsmall" font="system" weight="semibold">
              1 755 ₽
            </Typography.TitleResponsive>
          </Grid.Col>
          <Grid.Col width="6">
            <Typography.Text view="primary-small" color="secondary" tag="p" defaultMargins={false}>
              Цена выхода
            </Typography.Text>
            <Typography.TitleResponsive tag="h2" view="xsmall" font="system" weight="semibold">
              2 000 ₽
            </Typography.TitleResponsive>
          </Grid.Col>
        </Grid.Row>

        <Divider />

        <PureCell>
          <PureCell.Content>
            <PureCell.Main>
              <Typography.Text view="primary-small" color="secondary" tag="p" defaultMargins={false}>
                Тип инвест идеи
              </Typography.Text>
              <Typography.TitleResponsive tag="h2" view="xsmall" font="system" weight="semibold">
                Торговля по сигналам
              </Typography.TitleResponsive>
            </PureCell.Main>
          </PureCell.Content>
          <PureCell.Graphics verticalAlign="center">
            <InformationCircleMIcon color="#C1C1C3" />
          </PureCell.Graphics>
        </PureCell>

        <Divider />

        <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h2" view="small" font="system" weight="semibold">
          Почему мы так решили
        </Typography.TitleResponsive>

        <Typography.Text view="primary-medium" tag="p" defaultMargins={false}>
          Акции Полюса скорректировались от исторических максимумов на фоне общего снижения российского рынка. Однако
          фундаментальные показатели компании остаются сильными, а внешний фон способствует росту золота как защитного
          актива, — поэтому возможна новая волна подъёма котировок Полюса.
        </Typography.Text>

        <Typography.TitleResponsive tag="h2" view="xsmall" font="system" weight="semibold">
          Почему акции могут вырасти
        </Typography.TitleResponsive>
        <Typography.Text view="primary-medium" tag="p" defaultMargins={false}>
          Фундаментально крепкая компания. Полюс остаётся одним из лидеров мировой золотодобычи — в том числе за счёт
          себестоимости производства, которая является одной из самых низких в секторе. Это даёт компании запас прочности
          даже при падении цен на золото, а при их росте — увеличивает прибыль. Финансовые результаты за 2024 год это
          подтверждают: выручка и прибыль растут, и компания снова платит дивиденды после длительной паузы.
        </Typography.Text>
        <Typography.Text view="primary-medium" tag="p" defaultMargins={false}>
          Интересный уровень цен. Сейчас акции торгуются с дисконтом к своим средним мультипликаторам: EV/EBITDA ниже
          исторических значений. Это делает их интересными для тех, кто ищет точки входа в перспективный актив по более
          низкой цене.
        </Typography.Text>
        <Typography.Text view="primary-medium" tag="p" defaultMargins={false}>
          Активные инвестиции в будущее. Новые проекты — Сухой Лог, Чульбаткан и Чёртово Корыто — должны обеспечить Полюсу
          прирост добычи. По оценкам, к 2030 году годовой объём производства золота может вырасти до 6 млн унций.
        </Typography.Text>
        <Typography.Text view="primary-medium" tag="p" defaultMargins={false}>
          Золото — катализатор роста. В начале апреля США ввели пошлины против большинства стран в мире. Это вызвало
          коррекцию на сырьевых рынках, золото также снизилось. Но ключевые факторы — геополитическая напряжённость,
          инфляционные риски, нестабильность мировой экономики — продолжают работать в пользу драгметалла. Инвесторы
          по-прежнему воспринимают золото как универсальное средство защиты капитала. Снижение золота — это возможность
          купить акции Полюса перед тем, как цена начнёт восстанавливаться и будет способна обновить исторический максимум.
        </Typography.Text>
        <Typography.TitleResponsive tag="h2" view="xsmall" font="system" weight="semibold">
          Не забываем о рисках
        </Typography.TitleResponsive>

        <List tag="ul" marker="–">
          <List.Item>
            <Typography.Text view="primary-medium" tag="p" defaultMargins={false}>
              Дальнейший рост ключевой ставки, что вызовет общерыночное снижение.
            </Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text view="primary-medium" tag="p" defaultMargins={false}>
              Ухудшение геополитического фона.
            </Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text view="primary-medium" tag="p" defaultMargins={false}>
              В ближайшие 2 года ожидается сокращение добычи золота (из-за уменьшения доли добычи на месторождении
              Олимпиада). А развитие новых проектов увеличит капитальные расходы: хотя в долгосрочной перспективе добыча
              вырастет примерно в 2 раза, на коротком горизонте есть риск снижения дивидендов.
            </Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text view="primary-medium" tag="p" defaultMargins={false}>
              Снижение стоимости золота и укрепление рубля.
            </Typography.Text>
          </List.Item>
        </List>

        <Typography.TitleResponsive tag="h2" view="xsmall" font="system" weight="semibold">
          Доходность можно увеличить
        </Typography.TitleResponsive>

        <Typography.Text view="primary-medium" tag="p" defaultMargins={false}>
          Акции Полюса можно рассматривать как защитный инструмент на фоне общей неопределённости. Тем, кто готов к
          умеренному риску, стоит обратить внимание на возможность покупки с использованием{' '}
          <a
            style={{ color: 'inherit' }}
            href="https://alfabank.ru/make-money/investments/learn/testirovanie-cb-marzhinalnaja-torgovlja/"
          >
            маржинального плеча
          </a>{' '}
          — это позволяет увеличить потенциальную доходность при росте котировок. На{' '}
          <a
            style={{ color: 'inherit' }}
            href="https://alfabank.ru/alfa-investor/t/chto-takoe-urovni-riska-v-marzhinalnoy-torgovle/"
          >
            стандартном уровне риска
          </a>{' '}
          позицию можно увеличить почти в 5 раз. При использовании максимального плеча доходность может увеличиться до 70%.
          При этом брать максимальное плечо не обязательно, инвестор сам может выбрать уровень риска и объём увеличения
          позиции за счёт брокера. Плечо суммой до 5 тыс. руб. предоставляется бесплатно, если перешагнуть за этот порог —
          будет списываться комиссия согласно выбранному тарифному плану. Среднесрочная идея — возможность получить прибыль
          за счёт сделки с акциями на основе фундаментального анализа экспертов Альфа-Инвестиций. Среднесрочные идеи подходят
          для инвестиций на срок до шести месяцев. Прогноз аналитиков может измениться, следите за обновлениями. Павел
          Гаврилов, инвестиционный аналитик Альфа-Инвестиции
        </Typography.Text>
      </div>
      <Gap size={256} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile loading={loading} block view="primary" onClick={submitWith}>
          Перейти к покупке с плечом
        </ButtonMobile>
        <ButtonMobile loading={loading} block view="secondary" onClick={submitWithout}>
          Перейти к покупке без плеча
        </ButtonMobile>
      </div>
    </>
  );
};
