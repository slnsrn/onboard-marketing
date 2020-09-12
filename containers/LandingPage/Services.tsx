import { FiCast, FiVideo } from 'react-icons/fi'
import { FaLaptop } from 'react-icons/fa'
import { GiPalmTree, GiMailbox, GiTabletopPlayers, GiDesk } from 'react-icons/gi'
import { AiOutlineSound, AiOutlineQuestionCircle, AiOutlineFileDone } from 'react-icons/ai'
import { VscFiles } from 'react-icons/vsc'

const ServiceList = [
  {
    icon: <GiDesk />,
    title: 'Ofis Rezervasyonu',
    description:
      'Ofis kapasitesini, ofiste bulunan kişileri ve çalışma saatlerini kolayca düzenler.',
  },
  {
    icon: <GiMailbox />,
    title: 'Kargo Takibi',
    description: 'Ofise gelen evrak ve kargoların düzenli bir şekilde takip edilmesini sağlar.',
  },
  {
    icon: <FaLaptop />,
    title: 'Demirbaş Takibi',
    description:
      'Şirket demirbaşlarının takibini düzene sokar, çalışanlara devredilmesini kolaylaştırır.',
  },
  {
    icon: <AiOutlineSound />,
    title: 'Duyurular',
    description:
      'Duyurularınızı ya da mesajlarınızı ister tek tek, ister departmanlara özel ya da tüm şirkete kolayca ulaştırın. ',
  },
  {
    icon: <AiOutlineQuestionCircle />,
    title: 'Anketler',
    description:
      'Dilediğiniz konuda anketler ya da formlar hazırlayıp çalışanlara kolayca ulaştırabilir, sonuçları takip edebilirsiniz.',
  },
  {
    icon: <AiOutlineFileDone />,
    title: 'Dosya Yönetimi',
    description:
      'Gerekli dosya ve dökümanların sisteme yüklenmesini ve kayıt altında tutulmasını sağlar.',
  },
  {
    icon: <GiTabletopPlayers />,
    title: 'Toplantı Odası Yönetimi',
    description:
      'Toplantı odalarının daha etkili şekilde kullanılabilmesi için gerekli kayıtları tutar, sürecin hızlı yönetilmesini sağlar.',
  },
  {
    icon: <FiVideo />,
    title: 'Görüntülü Görüşme',
    description: 'Toplantılarınıza anlık görüntülü görüşme oluşturarak kolayca bağlanabilirsiniz.',
  },
  {
    icon: <GiPalmTree />,
    title: 'İzin Talebi Yönetimi',
    description:
      'Çalışan izinlerinin yönetimini ve takibini yapar, talepleri ve onay sistemini düzenler.',
  },
]

const Services = () => {
  return (
    <div className='flex flex-wrap'>
      {ServiceList.map((val, i) => (
        <div className={`w-full sm:w-1/2 lg:w-1/3 px-4`} key={i}>
          <div className='service service__style--2'>
            <div className='icon'>{val.icon}</div>
            <div className='content'>
              <h3 className='title'>{val.title}</h3>
              <p>{val.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Services
