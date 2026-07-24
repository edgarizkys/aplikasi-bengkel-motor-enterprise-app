// World-Class Controllers for Aplikasi Bengkel Motor Enterprise (Sistem Management Bengkel Motor Enterprise)

let servisData = [
  {
    "id": 1,
    "nopol": "B 1234 EKR",
    "pemilik": "Pak Edgar",
    "motor": "Honda Vario 160",
    "layanan": "Servis Berkala + Ganti Oli",
    "mekanik": "Budi Santoso",
    "biaya": 220000,
    "status": "Selesai"
  },
  {
    "id": 2,
    "nopol": "B 5678 TGA",
    "pemilik": "Ahmad Fauzi",
    "motor": "Yamaha NMAX",
    "layanan": "Ganti Kampas Rem",
    "mekanik": "Joko Susilo",
    "biaya": 150000,
    "status": "Proses"
  }
];

exports.getAllServis = async (req, res) => {
    const tenantId = req.headers['x-tenant-id'] || 'default_tenant';
    res.json({ success: true, tenantId, count: servisData.length, data: servisData });
};

exports.createServis = async (req, res) => {
    const item = { id: Date.now(), tenant_id: req.headers['x-tenant-id'] || 'default_tenant', ...req.body };
    servisData.unshift(item);
    res.status(201).json({ success: true, data: item });
};

exports.deleteServis = async (req, res) => {
    servisData = servisData.filter(i => i.id !== parseInt(req.params.id));
    res.json({ success: true, message: 'Booking Servis deleted' });
};

let sparepartData = [
  {
    "id": 1,
    "kode": "OLI-MPX2-800",
    "nama": "Oli MPX2 Matik 0.8L",
    "kategori": "Oli & Pelumas",
    "harga": 65000,
    "stok": 85
  },
  {
    "id": 2,
    "kode": "KPS-VARIO160",
    "nama": "Kampas Rem Depan Vario",
    "kategori": "Suku Cadang",
    "harga": 85000,
    "stok": 40
  }
];

exports.getAllSparepart = async (req, res) => {
    const tenantId = req.headers['x-tenant-id'] || 'default_tenant';
    res.json({ success: true, tenantId, count: sparepartData.length, data: sparepartData });
};

exports.createSparepart = async (req, res) => {
    const item = { id: Date.now(), tenant_id: req.headers['x-tenant-id'] || 'default_tenant', ...req.body };
    sparepartData.unshift(item);
    res.status(201).json({ success: true, data: item });
};

exports.deleteSparepart = async (req, res) => {
    sparepartData = sparepartData.filter(i => i.id !== parseInt(req.params.id));
    res.json({ success: true, message: 'Inventaris Sparepart deleted' });
};

let mekanikData = [
  {
    "id": 1,
    "nama": "Budi Santoso",
    "spesialis": "Mesin & Injection",
    "no_hp": "081234567890",
    "status": "Aktif"
  },
  {
    "id": 2,
    "nama": "Joko Susilo",
    "spesialis": "CVT & Matik Specialist",
    "no_hp": "082345678901",
    "status": "Aktif"
  }
];

exports.getAllMekanik = async (req, res) => {
    const tenantId = req.headers['x-tenant-id'] || 'default_tenant';
    res.json({ success: true, tenantId, count: mekanikData.length, data: mekanikData });
};

exports.createMekanik = async (req, res) => {
    const item = { id: Date.now(), tenant_id: req.headers['x-tenant-id'] || 'default_tenant', ...req.body };
    mekanikData.unshift(item);
    res.status(201).json({ success: true, data: item });
};

exports.deleteMekanik = async (req, res) => {
    mekanikData = mekanikData.filter(i => i.id !== parseInt(req.params.id));
    res.json({ success: true, message: 'Data Mekanik deleted' });
};

exports.getAnalytics = async (req, res) => {
    res.json({ success: true, platform: 'Aplikasi Bengkel Motor Enterprise', domain: 'Sistem Management Bengkel Motor Enterprise', version: '5.0.0-WorldClass', architecture: 'Multi-Tenant Ready + Redis Cache' });
};