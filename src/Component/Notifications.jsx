import React from "react";

const OrderIcon = () => (
  <svg
    className="w-7 h-7 shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#22C55E"
    strokeWidth="1.6"
  >
    <rect x="5" y="3.5" width="14" height="17" rx="2" />
    <path d="M9 3.5V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v.5" />
    <path d="M13 8.5 9.5 13h2.5l-1 3.5L15 12h-2.5l0.5-3.5Z" fill="#22C55E" />
  </svg>
);

const SubscriptionIcon = () => (
  <svg
    className="w-7 h-7 shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#22C55E"
    strokeWidth="1.6"
  >
    <rect x="4" y="3.5" width="12" height="16" rx="2" />
    <path d="M8 3.5V3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v.5" />
    <line x1="7.5" y1="9" x2="12.5" y2="9" />
    <line x1="7.5" y1="12" x2="11" y2="12" />
    <circle cx="16.5" cy="16.5" r="3" fill="white" />
    <line x1="18.8" y1="18.8" x2="20.5" y2="20.5" />
  </svg>
);

const notifications = [
  {
    id: 1,
    icon: "order",
    message: "New order received",
    time: "15 minutes ago",
    badge: "New Order",
    badgeType: "filled",
  },
  {
    id: 2,
    icon: "subscription",
    message: "Subscription expires in 7 days",
    time: "3 minutes ago",
    badge: "Message",
    badgeType: "outline",
  },
  {
    id: 3,
    icon: "order",
    message: "New order received",
    time: "15 minutes ago",
    badge: "New Order",
    badgeType: "filled",
  },
  {
    id: 4,
    icon: "order",
    message: "New order received",
    time: "15 minutes ago",
    badge: "New Order",
    badgeType: "filled",
  },
];

const Notifications = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-bold text-[#1a1a1a]">Notifications</h2>
          <p className="text-sm text-gray-500 mt-1">
            Keep up to date with your activity
          </p>
        </div>

        <button className="text-sm text-green-600 border border-green-600 rounded-full px-4 py-1.5 font-medium hover:bg-green-50 transition-colors shrink-0">
          See more
        </button>
      </div>

      {/* List */}
      <div className="flex flex-col gap-3 mt-5">
        {notifications.map(({ id, icon, message, time, badge, badgeType }) => (
          <div
            key={id}
            className="flex items-center justify-between gap-3 bg-green-50 rounded-xl px-4 py-3"
          >
            <div className="flex items-center gap-3 min-w-0">
              {icon === "order" ? <OrderIcon /> : <SubscriptionIcon />}
              <div className="min-w-0">
                <p className="text-sm font-semibold text-[#1a1a1a] truncate">
                  {message}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">{time}</p>
              </div>
            </div>

            {badgeType === "filled" ? (
              <span className="bg-blue-100 text-blue-900 text-sm font-medium rounded-full px-4 py-2 shrink-0">
                {badge}
              </span>
            ) : (
              <span className="bg-white text-[#1a1a1a] text-sm font-medium rounded-full border border-gray-800 px-5 py-2 shrink-0">
                {badge}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
